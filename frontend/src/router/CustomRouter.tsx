import { Route, Routes } from "react-router-dom";
import Nav from "../components/navbar/Nav";
import Home from "../components/home/Home";

const CustomRouter = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default CustomRouter;
