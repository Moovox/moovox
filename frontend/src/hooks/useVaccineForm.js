import { useEffect, useState } from "react";
import { vaccineService } from "../services/vaccineService";

export const useVaccineForm = () => {
  const [manufacturers, setManufacturers] = useState([]);
  const [vaccineTypes, setVaccineTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [manufacturersData, typesData] = await Promise.all([
          vaccineService.getAllManufacturers(),
          vaccineService.getAllVaccineTypes(),
        ]);

        setManufacturers(manufacturersData);
        setVaccineTypes(typesData);
      } catch (err) {
        setError(err);
        console.error("Error fetching vaccine form data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    manufacturers,
    vaccineTypes,
    loading,
    error,
  };
};
