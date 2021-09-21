import React, { useEffect } from "react";

const Helmet = ({ title, children }) => {
  document.title = `${title} - 50 Projects HTML, CSS, Javascript`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>{children}</>;
};

export default Helmet;
