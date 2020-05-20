import React from 'react';
import TopBar from "./TopBar/TopBar";
import SearchBar from "./SearchBar/SearchBar";
import NavBar from "./NavBar/NavBar";
function Header(props) {
    return (
        <div>
            <TopBar />
            <SearchBar/>
            <NavBar />
        </div>
    );
}

export default Header;