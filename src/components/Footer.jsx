import { Box, Typography, useTheme } from "@mui/material";

export function Footer() {
  const theme = useTheme();
  theme.palette.primary.main;
  return (
    <Box
      sx={{ p: 2, backgroundColor: theme.palette.primary.main }}
      display="flex"
      justifyContent="center"
      width={"100%"}
    >
      <Typography sx={{ fontFamily: "Montserrat", fontWeight: 300, color: "#fff", fontSize: 20, marginTop: "auto" }}>
        @2023 Created by Braiescu Aurelian
      </Typography>
    </Box>
  );
}
