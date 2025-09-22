import LeftNavbar from "components/LeftNavbar";;
import React from "react";

const StoreLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <section
    className="flex bg-[#4B4B3E] min-h-screen min-w-screen"
    >
      <LeftNavbar />
      <div className="flex-1 md:my-1.5 bg-[#212627] md:rounded-tl-2xl md:rounded-bl-2xl">
        {children}
      </div>
    </section>
  );
};

export default StoreLayout;
