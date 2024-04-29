import * as pages from "./pages";
import { ALL_ROLES } from "./roles";
import { PATHS } from "./paths";

// navbar routes
export const NAVBAR_ROUTES = [
  {
    path: PATHS.home,
    roles: ALL_ROLES,
    page: pages.Home,
    label: "Home",
  },
  {
    path: PATHS.about,
    roles: ALL_ROLES,
    page: pages.About,
    label: "About",
  },
];

// all routes
export const ROUTES = [...NAVBAR_ROUTES];
