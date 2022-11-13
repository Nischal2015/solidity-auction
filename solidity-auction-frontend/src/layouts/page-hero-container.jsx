import { Box } from "@mui/material";

export default function PageHeroContainer({ children }) {
  return (
    <Box sx={{ paddingTop: "22.5rem", textAlign: "center" }}>{children}</Box>
  );
}
