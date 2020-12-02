import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://scontent.flhe7-1.fna.fbcdn.net/v/t1.0-9/127925086_395445578171244_8532197513373684585_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=eJgVsJxufr8AX_MwzRE&_nc_ht=scontent.flhe7-1.fna&oh=5df0c112c1e1bf9d213f8895691da681&oe=5FED6B6D"
                    alt=""
                />
            </Link>
           
            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>

            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
