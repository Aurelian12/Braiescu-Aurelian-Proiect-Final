import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Error404() {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/mainpage");
  };
  return (
    <Container sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", my: 2 }}>
      <Typography variant="h2">Page not found</Typography>
      <Typography mt={2} variant="body1">
        The requested URL was not found ! ! !
      </Typography>
      <img
        className="errorPage"
        src="https://studio.uxpincdn.com/studio/wp-content/uploads/2021/06/10-error-404-page-examples-for-UX-design-1024x512.png.webp"
      />
      <Button onClick={goToMainPage} variant="contained">
        Go to Mainpage
      </Button>
    </Container>
  );
}
