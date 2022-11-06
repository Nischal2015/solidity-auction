import { Container, Grid, styled } from "@mui/material";
import { Account, Link } from "../../components";
import { Link as ReactLink } from "react-router-dom";
import auction from "../../assets/logo_dark.svg";

const LogoSpan = styled("span")({
  display: "inline-block",
  height: "2.75rem",
  width: "10.27rem",
  "& img": {
    height: "100%",
    width: "100%",
  },
});

export default function Navbar() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "absolute",
        right: 0,
        left: 0,
        paddingTop: "2rem",
        zIndex: 100,
      }}
      style={{ paddingInline: "4rem" }}
    >
      <Grid container alignItems={"center"} height={56}>
        <Grid item>
          <LogoSpan>
            <ReactLink to="/">
              <img src={auction} alt="App logo" />
            </ReactLink>
          </LogoSpan>
        </Grid>
        <Grid item marginLeft={"auto"}>
          <nav>
            <Grid container spacing={7}>
              <Grid item>
                <Link href="/portal/dashboard">Dashboard</Link>
              </Grid>
              <Grid item>
                <Link href="/portal/marketplace">Marketplace</Link>
              </Grid>
            </Grid>
          </nav>
        </Grid>
        <Grid item marginLeft={"auto"}>
          <Account />
        </Grid>
      </Grid>
    </Container>
  );
}
