import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import './App.css';
import CartPage from "./components/CartPage";
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import SideBar from "./components/SideBar";
import Signin from './components/Signin';
import Signup from './components/Signup';
import ContextWrapper from './context/ContextWrapper';
import {app} from './firebaseConfig'


export default function App() {
  return (
    <ContextWrapper>
      <Router>
        <div className="container">
          <Header />
          <SideBar />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ContextWrapper>
  );
}