import React from "react";
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import User from "./components/Pages/User";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";
import { GithubProvider } from "./contexts/github/GithubContext";
import {AlertProvider} from "./contexts/alert/AlertContext";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />

          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/notfound" element={<NotFound />}/>
              <Route path="/user/:login" element={<User/>}/>
              <Route path="/*" element={<NotFound/>} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
      </AlertProvider>
    </GithubProvider>

  );
}

export default App;
