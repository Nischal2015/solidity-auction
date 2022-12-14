import { Typography } from "@mui/material";
import { Container, PageHeroContainer } from "../layouts";

export default function Services() {
  return (
    <section>
      <Container>
        <PageHeroContainer>
          <Typography variant="h2">
            These are the services that we provide
          </Typography>
        </PageHeroContainer>
      </Container>
    </section>
  );
}
