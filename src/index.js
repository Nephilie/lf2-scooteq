import React from "react";
import ReactDOM from "react-dom/client";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


const englishCode = "en-UK";

const frenchCode = "es-FS";

function getAboutUsLink(language){

    switch (language.toLowerCase()){

      case englishCode.toLowerCase():

        return '/about-us';

      case frenchCode.toLowerCase():

        return '/-à propos de nous';

    }

    return '';

}

module.exports = getAboutUsLink;

const getAboutUsLink = require("./index");

test("Return about-us for english language", () => {

    expect(getAboutUsLink("en-UK")).toBe("/about-us");

});