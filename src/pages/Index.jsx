import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Index = () => {
  return (
    <section className="index-page h-screen ">
      <NavBar />
      <Outlet />
    </section>
  );
};

export default Index;
