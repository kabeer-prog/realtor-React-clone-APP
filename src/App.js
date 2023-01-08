import { BrowserRouter as Routers, Routes , Route } from 'react-router-dom';
import Home from "./pages/Home"
import ForgotPassword from "./pages/ForgotPassword"
import Offers from "./pages/Offers"
import Profile from "./pages/Profile"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Header from './components/Header';

function App() {
  return (
    <div className="">
      
        <Routers>
          <Header />
          <Routes>
            <Route path="/" element ={<Home />} />
            <Route path="/forgot-password" element ={<ForgotPassword />} />
            <Route path="/offers" element ={<Offers />} />
            <Route path="/profile" element ={<Profile />} />
            <Route path="/sign-in" element ={<Signin />} />
            <Route path="/sign-up" element ={<Signup />} />
          </Routes>
        </Routers>

      
    </div>
  );
}

export default App;
