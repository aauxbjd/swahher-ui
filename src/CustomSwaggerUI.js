import React, { useState } from 'react';
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const CustomSwaggerUI = () => {
  const [showOperations, setShowOperations] = useState(false);

  return (
    <>
      <button onClick={() => setShowOperations(!showOperations)}>
        Show Put Operations
      </button>
      {showOperations && (
        <SwaggerUI
          url="https://petstore.swagger.io/v2/swagger.json"
          onComplete={(api) => {
            api.getOperations().forEach((operation) => {
              if (operation.getMethod() !== 'put') {
                operation.hide();
              }
            });
          }}
        />
      )}
    </>
  );
};

export default CustomSwaggerUI;
