import React from "react";

const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8">{children}</div>
    </div>
  );
};

export default PageLayout;
