import React, { lazy, Suspense } from "react";
import { Route } from "wouter";

const HomePage = lazy(() => import("./pages/HomePage"));

import "./App.css";

function App() {
  return (
    <Suspense fallback={<></>}>
      <Route path="/" component={HomePage} />
    </Suspense>
  );
}

export default App;
