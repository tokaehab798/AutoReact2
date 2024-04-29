import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import AppWrapper from "./components/appWrapper/AppWrapper";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter basename="">
    <Suspense fallback={<span>...</span>}>
      <AppWrapper />
    </Suspense>
  </BrowserRouter>
);
