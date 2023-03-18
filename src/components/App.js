import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import Articles from "./Articles/Articles";
import Article from "./Articles/Article";
import Events from "./Events/Events";
import Event from "./Events/Event";
import Layout from "./Layout";
import MyProgress from "./MyProgress/MyProgress";
import Trainings from "./Training/Trainings";
import Training from "./Training/Training";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="trainings" element={<Trainings />} />
          <Route path="trainings/:id" element={<Training />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:id" element={<Article />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:id" element={<Event />} />
          <Route path="myProgress" element={<MyProgress />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
