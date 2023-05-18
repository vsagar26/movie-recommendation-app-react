import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Home, MovieDetail, Signin, RecentlyAdded, Signup, Category } from "./components";




function App() {
  return (
    <div className="bg-black h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:id" element={<MovieDetail />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/category" element={<Category />} />
          <Route path="/recentlyadded" element={<RecentlyAdded />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
