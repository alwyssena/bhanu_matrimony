import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

import { useEffect } from "react";

import Login from "./components/pages/login";
import Register from "./components/pages/register";
import VikshanaMatrimony from "./components/home";
import Home from "./components/h";



function SplashScreen() {

    const navigate = useNavigate();

    useEffect(() => {

        const timeout = setTimeout(() => {

            navigate("/home");

        }, 2000);

        return () => clearTimeout(timeout);

    }, [navigate]);

    return (
        <VikshanaMatrimony />
    );
}



function App() {

    return (

        <Router>

            <Routes>

                <Route
                    path="/"
                    element={<SplashScreen />}
                />

                <Route
                    path="/home"
                    element={<Home />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

            </Routes>

        </Router>
    );
}

export default App;