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


    Array.from(methodElements.current).forEach((element) => {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.style.marginRight = "10px";

      if (element.classList[0] === "opblock-summary" && (!element.firstChild || element.firstChild.nodeName !== "INPUT")) {

        element.insertBefore(checkbox, element.firstChild);
      }

      else if (element.classList[0] === "opblock-tag" && (!element.previousSibling || element.previousSibling.nodeName !== "INPUT")) {
        element.insertAdjacentElement("beforebegin", checkbox)
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
