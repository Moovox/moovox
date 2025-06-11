import { cowHead } from "@lucide/lab";
import { AlertCircle, Icon, Users } from "lucide-react";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { farmService } from "../../../services/farmService";
import { Button } from "../../ui/button";
import FormModal from "../../ui/form-modal";

/**
 * Smart modal for farm deletion with dependency checking
 * @param {Object} props
 * @param {boolean} props.open - If the modal is open
 * @param {Function} props.onOpenChange - Function to change modal state
 * @param {Function} props.onConfirm - Function to confirm deletion
 * @param {boolean} props.loading - If operation is in progress
 * @param {Object} props.farm - Farm data to be deleted
 */
function FarmDeleteModal({ open, onOpenChange, onConfirm, loading, farm }) {
  const [farmStats, setFarmStats] = useState(null);
  const [loadingStats, setLoadingStats] = useState(false);
  const [hasAnimals, setHasAnimals] = useState(false);
  const [hasUsers, setHasUsers] = useState(false);

  // Load farm statistics when modal opens
  useEffect(() => {
    if (open && farm?.id) {
      loadFarmStats();
    }
  }, [open, farm?.id]);

  const loadFarmStats = async () => {
    try {
      setLoadingStats(true);
      const stats = await farmService.getFarmStats(farm.id);
      setFarmStats(stats);

      // Check if there are animals or users
      setHasAnimals(stats?.animalCount > 0 || false);
      setHasUsers(stats?.userCount > 0 || false);
    } catch (error) {
      console.error("Error loading farm statistics:", error);
      // In case of error, assume there are dependencies to be conservative
      setHasAnimals(true);
      setHasUsers(false);
    } finally {
      setLoadingStats(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm();
  };

  const canDelete = !hasAnimals && !hasUsers;

  return (
    <FormModal
      title="Confirm Farm Deletion"
      open={open}
      onOpenChange={onOpenChange}
      onSubmit={handleSubmit}
      loading={loading}
      submitText={canDelete ? "Delete Farm" : "Cannot Delete"}
      cancelText="Cancel"
      submitDisabled={!canDelete}
    >
      <div className="flex flex-col items-center p-2 text-center">
        <AlertCircle
          className={`mb-4 h-16 w-16 ${canDelete ? "text-red-500" : "text-orange-500"}`}
        />

        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          {canDelete
            ? `Are you sure you want to delete the farm "${farm?.name}"?`
            : "Cannot delete this farm"}
        </h3>

        {loadingStats ? (
          <div className="mb-4 flex items-center justify-center">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-amber-300 border-t-amber-600"></div>
            <span className="ml-2 text-sm text-gray-600">
              Checking dependencies...
            </span>
          </div>
        ) : (
          <div className="mb-4 w-full space-y-3">
            {/* Farm statistics */}
            {farmStats && (
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                <h4 className="mb-2 text-sm font-medium text-gray-700">
                  Farm Status:
                </h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div
                    className={`flex items-center ${hasAnimals ? "text-red-600" : "text-green-600"}`}
                  >
                    <Icon iconNode={cowHead} className="mr-1 h-4 w-4" />
                    <span>{farmStats.animalCount || 0} animals</span>
                  </div>
                  <div
                    className={`flex items-center ${hasUsers ? "text-red-600" : "text-green-600"}`}
                  >
                    <Users className="mr-1 h-4 w-4" />
                    <span>{farmStats.userCount || 0} users</span>
                  </div>
                </div>
              </div>
            )}

            {/* Warning messages based on dependencies */}
            {hasAnimals && (
              <div className="rounded-md border border-red-200 bg-red-50 p-3 text-left">
                <p className="text-sm text-red-800">
                  <strong>Warning:</strong> This farm has{" "}
                  {farmStats?.animalCount || "some"} linked animals. To delete
                  the farm, you must first:
                </p>
                <ul className="mt-2 list-inside list-disc text-sm text-red-700">
                  <li>Transfer the animals to another farm, or</li>
                  <li>Remove all animals from this farm</li>
                </ul>
              </div>
            )}

            {hasUsers && (
              <div className="rounded-md border border-orange-200 bg-orange-50 p-3 text-left">
                <p className="text-sm text-orange-800">
                  <strong>Warning:</strong> This farm has{" "}
                  {farmStats?.userCount || "some"} users with access. Consider
                  revoking access for these users before deletion.
                </p>
              </div>
            )}

            {canDelete && (
              <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-left">
                <p className="text-sm text-amber-800">
                  <strong>Warning:</strong> This action cannot be undone. All
                  data associated with the farm will be permanently deleted.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Suggested actions when cannot delete */}
        {!canDelete && !loadingStats && (
          <div className="w-full space-y-2">
            <p className="mb-3 text-sm text-gray-600">Recommended actions:</p>
            <div className="space-y-2">
              {hasAnimals && (
                <Button
                  variant="outline"
                  className="w-full border-blue-300 text-blue-700 hover:bg-blue-50"
                  onClick={() => {
                    // Here you could open an animal management page
                    onOpenChange(false);
                    window.open(`/animals?farm=${farm.id}`, "_blank");
                  }}
                >
                  <Icon iconNode={cowHead} className="mr-2 h-4 w-4" />
                  Manage Animals from this Farm
                </Button>
              )}
              {hasUsers && (
                <Button
                  variant="outline"
                  className="w-full border-purple-300 text-purple-700 hover:bg-purple-50"
                  onClick={() => {
                    // Here you could open a user management page
                    onOpenChange(false);
                    console.log("Open user management for farm:", farm.id);
                  }}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Manage User Access
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </FormModal>
  );
}

FarmDeleteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  farm: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
  }),
};

FarmDeleteModal.defaultProps = {
  loading: false,
  farm: null,
};

export default FarmDeleteModal;
