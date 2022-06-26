import { Suspense } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { routes } from "./routes";
import logo from "./../logo.svg";

export const Navigation = () => {
  return (
    <>
      <Suspense fallback={<span>Loading ...</span>}>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="Logo" />

            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                    to={to}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.Component />}
              />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </Suspense>
    </>
  );
};
