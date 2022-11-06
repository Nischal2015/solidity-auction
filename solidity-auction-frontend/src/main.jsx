import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { UserProvider, Web3Provider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import { theme } from "./themes/theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Web3Provider>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes />
          </Router>
        </ThemeProvider>
      </UserProvider>
    </Web3Provider>
  </StrictMode>
);
