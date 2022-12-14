import React from "react";
import { Head, NavData, DropDown, HeaderLogo } from "./style";
import img from "../assets/header/realtor.png";
import Menu from "../assets/header/menu.png";
import logo from "../assets/header/Avail.png";

const Header = () => {
  const arr = ["LANDLORDS", "TENANTS", "EDUCATION"];
  return (
    <Head>
      <HeaderLogo>
        <img id="banner" src={img} alt="img" />
      </HeaderLogo>
      <img id="logo" src={logo} alt="logo" />
      <NavData>
        <li>PRICING</li>
        {arr.map((item, i) => (
          <DropDown key={i}>
            <option>{item}</option>
          </DropDown>
        ))}
        <li>LOG IN</li>
        <li>SIGN UP</li>
      </NavData>
      <img id="menu" src={Menu} alt="menu" />
    </Head>
  );
};

export default Header;
