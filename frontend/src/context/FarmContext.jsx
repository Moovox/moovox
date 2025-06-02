import React, { createContext, useContext, useEffect, useState } from "react";
import { farmService } from "../services/farmService";

// Create Farm context
const FarmContext = createContext();

/**
 * Custom hook to use the farm context
 */
export function useFarm() {
  return useContext(FarmContext);
}

/**
 * Farm Provider component to manage farm state and selection
 */
export function FarmProvider({ children }) {
  const [farmInfo, setFarmInfo] = useState(null);
  const [currentFarmId, setCurrentFarmId] = useState(
    localStorage.getItem("farmId"),
  );
  const [loading, setLoading] = useState(true);

  /**
   * Get current farm information
   */
  const getCurrentFarm = async () => {
    try {
      setLoading(true);
      const result = await farmService.checkSelectedFarm();
      if (result.valid) {
        setFarmInfo(result.farm);
        // Check if farm changed
        const newFarmId = result.farm.id.toString();
        if (newFarmId !== currentFarmId) {
          setCurrentFarmId(newFarmId);
          localStorage.setItem("farmId", newFarmId);
          // Dispatch custom event to notify change
          window.dispatchEvent(
            new CustomEvent("farmChanged", {
              detail: { farmId: newFarmId },
            }),
          );
        }
      } else {
        setFarmInfo(null);
        // If no valid farm, clear farmId
        if (currentFarmId) {
          setCurrentFarmId(null);
          localStorage.removeItem("farmId");
          // Dispatch change event to null
          window.dispatchEvent(
            new CustomEvent("farmChanged", {
              detail: { farmId: null },
            }),
          );
        }
      }
    } catch (error) {
      console.error("Error fetching farm:", error);
      setFarmInfo(null);
    } finally {
      setLoading(false);
    }
  };

  // Load farm information on component mount
  useEffect(() => {
    getCurrentFarm();
  }, []);

  /**
   * Select a farm by ID
   */
  const selectFarm = async (farmId) => {
    try {
      const result = await farmService.selectFarm(farmId);
      if (result) {
        await getCurrentFarm();
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error selecting farm:", error);
      return false;
    }
  };

  /**
   * Clear the currently selected farm
   */
  const clearFarm = () => {
    farmService.clearSelectedFarm();
    setFarmInfo(null);
    setCurrentFarmId(null);
  };

  // Create context value object
  const value = {
    farmInfo,
    currentFarmId,
    loading,
    refreshFarm: getCurrentFarm,
    selectFarm,
    clearFarm,
  };

  return <FarmContext.Provider value={value}>{children}</FarmContext.Provider>;
}

export default FarmContext;
