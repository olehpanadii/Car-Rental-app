import { Suspense } from "react";
import { Container, Header } from "./Layout.styled";
import { Outlet } from "react-router-dom";
import { Navigation } from "components/Navigation/Navigation";

export const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Container>
        <main>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};
