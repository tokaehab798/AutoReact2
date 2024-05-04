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
  {
    path: PATHS.departmentMembers,
    roles: ALL_ROLES,
    page: pages.DepartmentMembers,
    label: "Department Members",
  },
  {
    path: PATHS.successstories,
    roles: ALL_ROLES,
    page: pages.Successstories,
    label: "Success Stories",
  },
  {
    path: PATHS.competitions,
    roles: ALL_ROLES,
    page: pages.Competitions,
    label: "Competitions",
  },
  {
    path: PATHS.projects,
    roles: ALL_ROLES,
    page: pages.Projects,
    label: "Projects",
  },

  {
    path: PATHS.form,
    roles: ALL_ROLES,
    page: pages.Form,
    label: "Form",
  },
  {
    path: PATHS.studyplan,
    roles: ALL_ROLES,
    page: pages.Studyplan,
    label: "Studyplan",
  },
];

export const ADDITIONAL_ROUTES = [
  {
    path: PATHS.departmentmember ,
    roles: ALL_ROLES,
    page: pages.DepartmentMember,
  },
  {
    path: PATHS.successstory,
    roles: ALL_ROLES,
    page: pages.Successstory,
  },
  {
    path: PATHS.competition,
    roles: ALL_ROLES,
    page: pages.Competition,
  },
  {
    path: PATHS.project,
    roles: ALL_ROLES,
    page: pages.Project,
  },
  {
    path: PATHS.adminform,
    roles: ALL_ROLES,
    page: pages.AdminForm,
  },
  {
    path: PATHS.doctorform,
    roles: ALL_ROLES,
    page: pages.DoctorForm,
  },
  {
    path: PATHS.externaltraining2 ,
    roles: ALL_ROLES,
    page: pages.ExternalTraining2,
  },
  {
    path: PATHS.externaltraining ,
    roles: ALL_ROLES,
    page: pages.ExternalTraining,
  },
  {
    path: PATHS.internaltraining,
    roles: ALL_ROLES,
    page: pages.InternalTraining,
  },
  {
    path: PATHS.internaltraining2,
    roles: ALL_ROLES,
    page: pages.InternalTraining2,
  },
  {
    path: PATHS.AdminAddAbout,
    roles: ALL_ROLES,
    page: pages.AdminAddAbout,
  },
  {
    path: PATHS.adminaddinternal,
    roles: ALL_ROLES,
    page: pages.AdminAddInternal,
  },
  {
    path: PATHS.adminaddexternal,
    roles: ALL_ROLES,
    page: pages.AdminAddExternal,
  },
  {
    path: PATHS.adminaddsuccessstory,
    roles: ALL_ROLES,
    page: pages.AdminAddSuccessstory,
  },
  {
    path: PATHS.adminaddstudyplan ,
    roles: ALL_ROLES,
    page: pages.AdminAddStudyplan,
  },
  {
    path: PATHS.adminaddcompetition,
    roles: ALL_ROLES,
    page: pages.AdminAddCompetition,
  },
  {
    path: PATHS.notfound,
    roles: ALL_ROLES,
    page: pages.NotFound,
  },
];

export const LOGIN_ROUTE = {
  path: PATHS.login,
  roles: ALL_ROLES,
  page: pages.Login,
};

// all routes
export const ROUTES = [...NAVBAR_ROUTES, ...ADDITIONAL_ROUTES, LOGIN_ROUTE];
