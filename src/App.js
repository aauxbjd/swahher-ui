import React, { useRef } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const swaggerUrl = "https://petstore.swagger.io/v2/swagger.json";

function App() {
  const methodElements = useRef([]);

  const handleLoad = () => {
    const elementsWithTag = document.getElementsByClassName("opblock-tag");
    const elementsWithSummary = document.getElementsByClassName(
      "opblock-summary"
    );
    methodElements.current = [...elementsWithTag, ...elementsWithSummary];
    console.log("hi", methodElements.current);
    Array.from(methodElements.current).forEach((element) => {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.style.marginRight = "10px";


      if (!element.firstChild || element.firstChild.nodeName !== "INPUT") {


        if (element.className === "opblock-tag") {
          element.insertAdjacentElement("beforebegin", checkbox)
        }
        else
        
          element.insertBefore(checkbox, element.firstChild);
      }
    });
  };

  return (
    <div>
      <button onClick={handleLoad}>show</button>
      <SwaggerUI
        url={swaggerUrl}
      />
    </div>
  );
}

export default App;
