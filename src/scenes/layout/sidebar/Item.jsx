/* eslint-disable react/prop-types */
import { MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

const Item = ({ title, path, icon }) => {
  const location = useLocation();
  return (
    <MenuItem
      component={<Link to={path} />}
      to={path}
      icon={<span style={{ fontSize: "50px" }}>{icon}</span>}
      rootStyles={{
        color: path === location.pathname && "red",
        fontSize: "30px", // Augmentation de la taille du texte
        fontWeight: "bold", 
      }}
    >
      {title}
    </MenuItem>
  );
};

export default Item;
