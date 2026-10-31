import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import { useState } from "react";

export const WishlistDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContentText>
          Are you sure you want to remove this product?
        </DialogContentText>
        <DialogActions>
          <Button>Cancel</Button>
          <Button>Yes, Remove</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
