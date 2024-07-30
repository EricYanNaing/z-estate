import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Index = () => {
  return (
    <section>
      <NavBar />
      <Outlet />
    </section>
  );
};

export default Index;
