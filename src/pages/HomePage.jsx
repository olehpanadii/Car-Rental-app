import { Welkome } from "components/Welkome/Welkome";
import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <Welkome />
    </>
  );
}
