import React, { useContext, Suspense } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import { Context } from "./Context";

//import Favs from "./components/pages/Favs";
// import {Home} from "./components/pages/Home";
// import Detail from "./components/pages/Detail/Detail";
// import { NotFound } from "./components/pages/NotFound";
// import Users from "./components/pages/Users";
// import NotRegisteredUser from "./components/pages/NotRegisteredUser.js";

const Favs = React.lazy(() => import("./components/pages/Favs"));
const Home = React.lazy(() => import("./components/pages/Home"));
const Detail = React.lazy(() => import("./components/pages/Detail/Detail"));
const NotFound = React.lazy(() => import("./components/pages/NotFound"));
const Users = React.lazy(() => import("./components/pages/Users"));
const NotRegisteredUser = React.lazy(() =>
  import("./components/pages/NotRegisteredUser.js")
);

const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route
            exact
            path="/favs"
            element={isAuth ? <Favs /> : <Navigate replace to="/login" />}
          />
          <Route
            exact
            path="/user"
            element={isAuth ? <Users /> : <Navigate replace to="/login" />}
          />
          <Route
            exact
            path="/login"
            element={
              !isAuth ? <NotRegisteredUser /> : <Navigate replace to="/" />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <NavBar />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
