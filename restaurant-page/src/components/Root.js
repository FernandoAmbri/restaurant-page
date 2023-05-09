import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Root() {
  return (
    <>
      <div className="root">
        <Navbar />
        <div className="dynamic-content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Root;
