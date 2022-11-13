import { Typography } from "@mui/material";
import { Container, PageHeroContainer } from "../layouts";

export default function Blog() {
  return (
    <section>
      <Container>
        <PageHeroContainer>
          <Typography variant="h2">This is our blog post</Typography>
        </PageHeroContainer>
      </Container>
    </section>
  );
}
