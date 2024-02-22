import { Suspense } from "react";

import { Outlet } from "react-router-dom";
import { Navigation } from "components/Navigation/Navigation";

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
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
