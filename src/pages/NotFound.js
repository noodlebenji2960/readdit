import React from "react";
import {
  useLocation
} from "react-router-dom";

 
const NoMatch = () => {
  let location = useLocation();
 
  return (
    <div>
      <h3>
        No match for route <code>{location.pathname}</code>
      </h3>
    </div>
  );
};

export default NoMatch