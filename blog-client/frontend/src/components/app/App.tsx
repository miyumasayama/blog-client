import { FC } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Blogs as BlogIndex } from "../pages/blogs";
import { Home } from "../pages/home";
import { Words as WordIndex } from "../pages/words";
import { Words } from "./fragments/words";

export const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<BlogIndex />}>
          <Route index element={<BlogIndex />} />
        </Route>
        <Route path='/words' element={<Words />}>
          <Route index element={<WordIndex />} />
        </Route>
      </Routes>
    </Router>
  );
};
