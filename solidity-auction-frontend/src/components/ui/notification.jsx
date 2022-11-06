import { useState, forwardRef } from "react";
import { Snackbar, Alert as MuiAlert } from "@mui/material";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notification() {
  const [open, setOpen] = useState(true);

  const closeAlertHandler = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={closeAlertHandler}>
      <Alert
        onClose={closeAlertHandler}
        severity="success"
        sx={{ width: "100%" }}
      >
        This is a success message!
      </Alert>
    </Snackbar>
  );
}
