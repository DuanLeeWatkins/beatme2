import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  HomePage,
  LoginPage,
  SignupPage,
  ErrorPage,
  Navbar,
  Feed,
  SearchFeed,
  Account,
} from "./components";

import supabase from "./config/supabaseClient";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/signup"
            element={
              !session ? (
                <SignupPage />
              ) : (
                <Account key={session.user.id} session={session} />
              )
            }
          />
          <Route path="*" element={<ErrorPage />} />
          {/* <Route path="/search/:searchTerm" element={SearchFeed} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
