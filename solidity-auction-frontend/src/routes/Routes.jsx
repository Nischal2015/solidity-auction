import { Routes as ReactRoutes, Route } from "react-router-dom";
import { Navigation } from "../layouts";
import { AboutUs, Home, Login, Services } from "../pages";

export default function Routes() {
  return (
    <>
      <Navigation />
      <ReactRoutes>
        <Route element={<Home />} path="/" exact />
        <Route element={<AboutUs />} path="/about-us" />
        <Route element={<Services />} path="/services" />
        <Route element={<Login />} path="/login" />
      </ReactRoutes>
    </>
  );
}
