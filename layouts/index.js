import React from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import background from  "../public/mediaAttributions/workBackground.svg"

const Layout = ({ children }) => {
  return (
    <div>
      {/* <Header /> */}
      <main className={`${styles.main} bg-dark vh-100 d-flex flex-column justify-content-center`}>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

const style = {
  backgroundColor: "#857BB3",
  backgroundImage: `url(${background.src})`,
  backgroundRepeat: "repeat"
}

export default Layout;
