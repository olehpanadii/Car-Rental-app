import { Suspense } from "react";
import { Container, Header } from "./Layout.styled";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <main>
          <Suspense>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};
