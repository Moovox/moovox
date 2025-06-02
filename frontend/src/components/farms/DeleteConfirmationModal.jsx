import { AlertCircle } from "lucide-react";
import PropTypes from "prop-types";
import React from "react";
import FormModal from "../ui/form-modal";

/**
 * Modal for confirming deletion operations
 * @param {Object} props
 * @param {boolean} props.open - Whether the modal is open
 * @param {Function} props.onOpenChange - Function to call when modal open state changes
 * @param {Function} props.onConfirm - Function to call when deletion is confirmed
 * @param {boolean} props.loading - Whether a deletion operation is in progress
 * @param {string} props.title - Title of the modal
 * @param {string} props.message - Message to display
 * @param {string} props.itemName - Name of the item being deleted
 */
function DeleteConfirmationModal({
  open,
  onOpenChange,
  onConfirm,
  loading,
  title,
  message,
  itemName,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm();
  };

  return (
    <FormModal
      title={title || "Confirm Deletion"}
      open={open}
      onOpenChange={onOpenChange}
      onSubmit={handleSubmit}
      loading={loading}
      submitText="Delete"
      cancelText="Cancel"
    >
      <div className="flex flex-col items-center p-2 text-center">
        <AlertCircle className="mb-4 h-16 w-16 text-red-500" />

        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          {message || "Are you sure you want to delete this item?"}
        </h3>

        {itemName && (
          <p className="mb-3 text-sm font-medium text-red-600">"{itemName}"</p>
        )}

        <p className="mb-4 text-sm text-gray-600">
          This action cannot be undone. All associated data will be permanently
          deleted.
        </p>

        <div className="w-full rounded-md border border-amber-200 bg-amber-50 p-3 text-left">
          <p className="text-sm text-amber-800">
            <strong>Warning:</strong> Deleting this item may affect related
            records and data integrity.
          </p>
        </div>
      </div>
    </FormModal>
  );
}

DeleteConfirmationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  itemName: PropTypes.string,
};

export default DeleteConfirmationModal;
