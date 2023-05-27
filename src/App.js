import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./js/utils/theme";
import "./assets/css/style.css";
import Header from "./js/components/header/index.jsx";
import Footer from "./js/components/footer/index.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainNavigation from "./js/components/MainNavigation";
import { AuthWrapper } from "./js/context/auth";
import loader from "../src/assets/images/loader.gif";
import { CartWrapper } from "./js/context/cart";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<></>}>
        <BrowserRouter>
          <AuthWrapper>
            <CartWrapper>
              <div className="loader-wrapper">
                <img src={loader} alt="loader" />
              </div>
              <div className="wrapper">
                <Header />
                <main>
                  <MainNavigation />
                </main>
                <Footer />
              </div>
              <ToastContainer />
            </CartWrapper>
          </AuthWrapper>
        </BrowserRouter>
      </React.Suspense>
    </ThemeProvider>
  );
};

export default App;
