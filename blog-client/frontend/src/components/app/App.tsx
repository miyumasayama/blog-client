import { FC } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Blogs as BlogIndex } from "../pages/blogs/blogs";
import { Home } from "../pages/home/home";
import { Login } from "../pages/login/login";
import { SignUp } from "../pages/signup/signUp";
import { Words as WordIndex } from "../pages/words/words";
import { Secured } from "./fragments/secured";
import { Words } from "./fragments/words";

export const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Secured />}>
          <Route index element={<Home />} />
          <Route path='/blogs' element={<BlogIndex />}>
            <Route index element={<BlogIndex />} />
          </Route>
          <Route path='/words' element={<Words />}>
            <Route index element={<WordIndex />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
