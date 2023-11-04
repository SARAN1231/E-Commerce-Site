import Header from "./components/layout/Header";
// import Footer from './components/layout/Footer';
import "./App.css";
import Home from "./components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <Router>
      <div className="App">
        <HelmetProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Footer /> */}
          </Routes>
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;
