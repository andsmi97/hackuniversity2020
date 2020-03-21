import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../assets/images/BookStore.svg";
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100px",
  },
  menuItem: {
    width: "100px",
    cursor: "pointer",
    textDecoration: "none",
    color: "black",
    fontSize: "26px",
    marginRight: "20px",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <img src={Logo} width={350} style={{ margin: 24 }} alt="logo" />
      <div style={{ display: "flex" }}>
        <Link to="/" className={classes.menuItem}>
          Магазин
        </Link>
        <Link to="/signin" className={classes.menuItem}>
          Войти
        </Link>
      </div>
    </div>
  );
};
export default Header;
