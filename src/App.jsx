
import './components/navbar/navbar.css'
import Navbar from './components/navbar/navbar.jsx'
import './App.css'
import Leaflet from "./components/leaflet/leaflet.jsx";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import About from "./components/about/about.jsx";
function Root(){

    return(


        <div>
            <div>
                <Navbar/>

                <Routes>
                    <Route path = {`/*`} element ={<Leaflet/>} />
                    <Route path = {`/about`} element ={<About/>} />

                </Routes>

            </div>
        </div>

    );
}


const router = createBrowserRouter([{path : "*", Component: Root  }  ])
function App() {

    return <RouterProvider router={router} />;
}

export default App;


