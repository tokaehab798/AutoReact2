import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./constants/routes";
import WithAuth from "./hoc/withAuth/WithAuth";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />

      <Suspense fallback={<span>... loading</span>}>
        <Routes>
          {
            // user.isAuthenticated ? (
            ROUTES
              // .filter((route) => route.roles?.includes(user.role))
              .map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <WithAuth
                      WrappedComponent={route.page}
                      roles={route.roles}
                    />
                  }
                />
              ))
            // ) : (
            //   <Route path={PATHS.login} element={<Login />} />
            // )
          }

          <Route path="*" element={<>not found</>} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
