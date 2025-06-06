import PropTypes from "prop-types";
import React from "react";

const PageHeader = ({ icon, title, description }) => {
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 shadow-sm">
          {React.isValidElement(icon)
            ? React.cloneElement(icon, {
                className: `h-5 w-5 text-white ${icon.props.className || ""}`,
              })
            : icon}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {description && <p className="text-gray-600">{description}</p>}
        </div>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default PageHeader;
