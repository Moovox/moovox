import { motion } from "framer-motion";
import { ArrowLeftFromLine, LogOut } from "lucide-react";
import PropTypes from "prop-types";
import { memo, useState } from "react";
import FormModal from "../ui/form-modal";

function LogoutButton({ onLogout, expanded }) {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const handleLogout = () => {
    onLogout();
    setOpen(false);
  };

  return (
    <FormModal
      title="Do you really want to log out?"
      open={open}
      onOpenChange={handleOpenChange}
      onSubmit={handleLogout}
      submitText="Log Out"
      cancelText="Cancel"
      triggerElement={
        <motion.button
          className="mx-2 my-1 flex items-center rounded-lg bg-transparent p-4 font-semibold text-[#fff8f0] transition-colors duration-200 hover:bg-[#fff8f0]/10 hover:text-[#fff8f0]"
          tabIndex={0}
          aria-label="Open logout dialog"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeftFromLine className="mr-2 h-5 w-5" />
          <span
            className={`transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-0"} text-[#fff8f0] lg:opacity-100`}
          >
            Logout
          </span>
        </motion.button>
      }
    >
      <div className="py-2">
        <div className="mb-4 flex items-center justify-center text-amber-700">
          <LogOut className="h-12 w-12" />
        </div>
        <p className="text-center text-amber-900">
          You will be logged out and returned to the login screen.
        </p>
      </div>
    </FormModal>
  );
}

LogoutButton.propTypes = {
  onLogout: PropTypes.func.isRequired,
  expanded: PropTypes.bool,
};

LogoutButton.defaultProps = {
  expanded: false,
};

export default memo(LogoutButton);
