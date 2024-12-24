import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { purple, amber } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";

import { Checkout, Product, Products, Home } from "./pages";
import { CartProvider } from "./context/cart";
import { Navbar, Footer, CarouselWrapper } from "./components";

const theme = createTheme({
  colorSchemes: {
    dark: false,
  },
  palette: {
    primary: {
      main: purple[900],
    },
    secondary: {
      main: amber[900],
    },
    // primary: {
    //   light: '#757ce8',
    //   main: '#3f50b5',
    //   dark: '#002884',
    //   contrastText: '#fff',
    // },
    // secondary: {
    //   light: '#ff7961',
    //   main: '#f44336',
    //   dark: '#ba000d',
    //   contrastText: '#000',
    // },
  },
});

function App() {
  const [cart, setCart] = React.useState([]);

  const value = React.useMemo(
    () => ({
      cart,
    }),
    [cart]
  );

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <CartProvider value={value}>
            <Navbar />
            <CarouselWrapper/>
            <Routes>
              <Route exact path="/checkout" element={<Checkout />} />
              <Route path="/:category/:productId" element={<Product />} />
              <Route exact path="/:category" element={<Products />} />
              <Route exact path="/" element={<Home />} />
            </Routes>
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
