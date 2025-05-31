import React from 'react';
import FormModal from '../ui/form-modal';
import { AlertCircle } from 'lucide-react';
import PropTypes from 'prop-types';

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
function DeleteConfirmationModal({ open, onOpenChange, onConfirm, loading, title, message, itemName }) {
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
            <div className="flex flex-col items-center text-center p-2">
                <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {message || "Are you sure you want to delete this item?"}
                </h3>
                
                {itemName && (
                    <p className="text-sm text-red-600 font-medium mb-3">
                        "{itemName}"
                    </p>
                )}
                
                <p className="text-sm text-gray-600 mb-4">
                    This action cannot be undone. All associated data will be permanently deleted.
                </p>
                
                <div className="bg-amber-50 border border-amber-200 rounded-md p-3 w-full text-left">
                    <p className="text-amber-800 text-sm">
                        <strong>Warning:</strong> Deleting this item may affect related records and data integrity.
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
    itemName: PropTypes.string
};

export default DeleteConfirmationModal; 