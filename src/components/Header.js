import React from "react";

import BannerComponent from "./Banner";
import { Header } from "../styles/HeaderStyles";

const HeaderComponent = () => {
  return (
    <Header>
      <BannerComponent />
    </Header>
  );
};

export default HeaderComponent;
