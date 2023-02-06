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
      
      // checkbox.addEventListener("click", () => {
      //   const methodCheckboxes = element.parentElement.getElementsByClassName("opblock-summary")[0].getElementsByTagName("input");
      //   Array.from(methodCheckboxes).forEach((methodCheckbox) => {
      //     methodCheckbox.checked = checkbox.checked;
      //   });
      // })

      if (!element.firstChild || element.firstChild.nodeName !== "INPUT") {
        element.insertBefore(checkbox, element.firstChild);
      }
    });
  };

  return (
    <div>
      <button onClick={handleLoad}>show</button>
      <SwaggerUI
        url={swaggerUrl}
        // onComplete={handleLoad}
        // custom-layout={handleLoad}
      />
    </div>
  );
}

export default App;
