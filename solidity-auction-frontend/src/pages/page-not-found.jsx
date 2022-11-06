import { Grid, styled, Typography, useTheme } from "@mui/material";

const Bar = styled("div")((props) => ({
  height: "100%",
  width: "4px",
  position: "absolute",
  right: 0,
  top: 0,
  backgroundColor: props.backgroundColor,
  borderRadius: "1px",
}));

export default function PageNotFound() {
  const theme = useTheme();
  const sx = {
    fontWeight: 600,
    fontSize: "3.2rem",
    color: theme.colors.tertiary.light,
    padding: "0.4rem 3.2rem 0.4rem 0",
  };
  return (
    <Grid
      container
      height={"100vh"}
      width="100vw"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid item>
        <div style={{ position: "relative" }}>
          <Typography variant="h2" sx={sx}>
            404
          </Typography>
          <Bar backgroundColor={theme.colors.tertiary.main} />
        </div>
      </Grid>
      <Grid item>
        <Typography
          variant="h2"
          sx={sx}
          style={{ fontSize: "2rem", paddingLeft: "3.2rem", fontWeight: 500 }}
        >
          This page could not be found.
        </Typography>
      </Grid>
    </Grid>
  );
}
