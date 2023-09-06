import { Route, Routes , Navigate , Link} from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";
import { UserProvider } from "./context/UserProvider";

function MainApp() {
    return ( 
        <UserProvider>
            <h1>Main App</h1>
            <Navbar/>
            <hr />


            <Routes>
                <Route path= "/" element={<HomePage/>}/>
                <Route path= "about" element={<AboutPage/>}/>
                <Route path= "login" element={<LoginPage/>}/>

                <Route path="/*" element={<Navigate to="/about"/>}></Route>
            </Routes>
        </UserProvider>
     );
}

export default MainApp;