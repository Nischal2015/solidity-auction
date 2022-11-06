import { Container, Grid, styled } from "@mui/material";
import { Link } from "../components";
import { Link as ReactLink } from "react-router-dom";
import auction from "../assets/logo_dark.svg";

const LogoSpan = styled("span")({
  display: "inline-block",
  height: "3.6rem",
  width: "13.42rem",
  "& img": {
    height: "100%",
    width: "100%",
  },
});

export default function Navigation() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "absolute",
        right: 0,
        left: 0,
        paddingTop: "5rem",
        zIndex: 100,
      }}
      style={{ paddingInline: "7rem" }}
    >
      <Grid container alignItems={"center"} height={72}>
        <Grid item>
          <ReactLink to="/">
            <LogoSpan>
              <img src={auction} alt="App logo" />
            </LogoSpan>
          </ReactLink>
        </Grid>
        <Grid item marginLeft={"auto"}>
          <nav>
            <Grid container spacing={7}>
              <Grid item>
                <Link href="/">Home</Link>
              </Grid>
              <Grid item>
                <Link href="/blog">Blog</Link>
              </Grid>
              <Grid item>
                <Link href="/about-us">About Us</Link>
              </Grid>
              <Grid item>
                <Link href="/services">Services</Link>
              </Grid>
            </Grid>
          </nav>
        </Grid>
      </Grid>
    </Container>
  );
}
