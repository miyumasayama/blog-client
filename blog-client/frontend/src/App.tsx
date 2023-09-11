import { FC } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Blogs } from "./components/pages/blogs";

export const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Blogs />} />
      </Routes>
    </Router>
  );
};
