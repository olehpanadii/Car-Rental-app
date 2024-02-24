import { Suspense } from "react";

import { Outlet } from "react-router-dom";
import { Navigation } from "components/Navigation/Navigation";
import { Header } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <div>
        <main>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  );
};
