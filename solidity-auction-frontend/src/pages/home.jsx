import { Container, PageHeroContainer } from "../layouts";
import { Box, Button, styled, Typography, useTheme } from "@mui/material";
import { authentication } from "../services";
import { Notification } from "../components";
import { useNavigate } from "react-router-dom";

const SectionHero = styled("section")({
  position: "relative",
  height: "10vw",
  maxHeight: "200rem",
});

export default function Home() {
  const navigate = useNavigate();
  const { login } = authentication();
  return (
    <SectionHero>
      <Container>
        <PageHeroContainer>
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: "8rem",
                fontWeight: 700,
                letterSpacing: "-0.5px",
                lineHeight: 1.1,
                wordSpacing: "2px",
                marginBottom: "2rem",
              }}
            >
              The Auction App
            </Typography>
          </Box>
          <Box
            maxWidth={"63rem"}
            sx={{ margin: "0 auto 4.8rem", opacity: 0.7 }}
          >
            <Typography variant="h2">
              Wanna bid? Try our online bidding marketplace to get the best
              deals
            </Typography>
          </Box>
          <Button
            size="large"
            variant="contained"
            onClick={() => login(() => navigate("/portal/dashboard"))}
            color="warning"
            sx={{ borderRadius: "16px" }}
          >
            <Typography
              variant="span"
              sx={{
                fontSize: "1.6rem",
                fontWeight: 700,
                padding: "0.8rem 1.6rem",
              }}
            >
              LOG IN
            </Typography>
          </Button>
        </PageHeroContainer>
      </Container>
    </SectionHero>
  );
}
