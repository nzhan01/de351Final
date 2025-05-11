import './navbar.css';
import {Link} from "react-router";
import styled from "styled-components";


{/*
This component produces the navbar at the top of the screen. It uses react browserRouter from app.tsx
to have links to either the map or the history page

*/}





const StyledTitle = styled.h1`
font-size: 65px

`



 function Navbar() {


    return( 
        <div id = "navbar">
            <StyledTitle> FindMyStory</StyledTitle>

            <Link to="/">Map</Link>
            <Link to="/about">About</Link>
            <Link to="https://github.com/nzhan01/de351Final">Source Code</Link>





        </div> 
            
    )
}
export default Navbar;