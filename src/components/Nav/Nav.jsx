import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const NavLinkme = ({ to, children,
    props}) => {
    return (
        <NavLink
        {...props}
        to={to}
        className={({isActive}) =>
    (isActive ? styles.active:
styles.disable)}
>
  {children}  
</NavLink>
);
};

export default function Nav (props) {
    
    return(
        
        <div className={styles.container}>
            <NavLinkme to="/home">Home</NavLinkme>
            <NavLinkme to="/about">About</NavLinkme>
            <SearchBar onSearch={(characterID) => props.onSearch(characterID)}/>
        </div>
         
    )
}