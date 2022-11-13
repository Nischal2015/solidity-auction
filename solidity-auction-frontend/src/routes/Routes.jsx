import { Routes as ReactRoutes, Route, useLocation } from "react-router-dom";
import { Navigation } from "../layouts";
import {
  AboutUs,
  Home,
  Blog,
  Services,
  PageNotFound,
  Dashboard,
  Navbar,
} from "../pages";
import { PrivateRoutes } from "./PrivateRoutes";

export default function Routes() {
  const location = useLocation();
  return (
    <>
      {location.pathname.includes("portal") ? <Navbar /> : <Navigation />}
      <ReactRoutes>
        <Route element={<PrivateRoutes />}>
          <Route path="/portal/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<Home />} path="/" exact />
        <Route element={<Blog />} path="/blog" />
        <Route element={<AboutUs />} path="/about-us" />
        <Route element={<Services />} path="/services" />
        <Route element={<PageNotFound />} path="*" />
      </ReactRoutes>
    </>
  );
}
