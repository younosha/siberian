import { NavLink } from "react-router-dom";
import Styles from "./Link.module.css";

export const Link = ({name, to}) => {
  return <NavLink 
    className={Styles.link} 
    to={to}
    style={({ isActive }) => ({
      borderBottom: isActive ? '2px solid yellow' : '2px solid transparent'
    })}
  >
    {name}
  </NavLink>
}