import { Container, Grid, styled } from "@mui/material";
import { Link } from "../components";

import auction from "../assets/logo_dark.svg";

const LogoSpan = styled("span")({
  display: "inline-block",
  height: "4rem",
  width: "14.91rem",
  "& img": {
    height: "100%",
    width: "100%",
  },
});

export default function Navigation() {
  return (
    <Container
      maxWidth="xl"
      sx={{ position: "absolute", right: 0, left: 0, paddingTop: "5rem" }}
      style={{ paddingInline: "7rem" }}
    >
      <Grid container alignItems={"center"} height={72}>
        <Grid item>
          <LogoSpan>
            <img src={auction} alt="App logo" />
          </LogoSpan>
        </Grid>
        <Grid item marginLeft={"auto"}>
          <nav>
            <Grid container spacing={7}>
              <Grid item>
                <Link href="/">Home</Link>
              </Grid>
              <Grid item>
                <Link href="/about-us">About Us</Link>
              </Grid>
              <Grid item>
                <Link href="/services">Services</Link>
              </Grid>
              <Grid item>
                <Link href="/login">Login</Link>
              </Grid>
            </Grid>
          </nav>
        </Grid>
      </Grid>
    </Container>
  );
}
