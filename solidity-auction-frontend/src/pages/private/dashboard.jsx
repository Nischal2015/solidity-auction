import { Typography } from "@mui/material";
import { Container, PageHeroContainer } from "../../layouts";

export default function Dashboard() {
  return (
    <section>
      <Container>
        <PageHeroContainer>
          <Typography variant="h2">This is the dashboard page</Typography>
        </PageHeroContainer>
      </Container>
    </section>
  );
}
