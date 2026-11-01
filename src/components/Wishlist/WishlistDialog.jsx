import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export const WishlistDialog = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "100%",
          maxWidth: "380px",
          borderRadius: "16px",
          padding: "12px",
        },
      }}
    >
      <DialogTitle
        sx={{
          fontSize: "20px",
          fontWeight: 600,
          color: "#222",
        }}
      >
        Remove Product
      </DialogTitle>

      <DialogContentText
        sx={{
          px: 3,
          py: 1,
          fontSize: "14px",
          color: "#777",
        }}
      >
        Are you sure you want to remove this product?
      </DialogContentText>

      <DialogActions sx={{ px: 3, py: 2, gap: 1 }}>
        <Button
          onClick={onClose}
          sx={{
            color: "#555",
            textTransform: "none",
            borderRadius: "8px",
          }}
        >
          Cancel
        </Button>

        <Button
          onClick={onConfirm}
          variant="contained"
          color="error"
          sx={{
            textTransform: "none",
            borderRadius: "8px",
            boxShadow: "none",
            px: 2.5,
          }}
        >
          Yes, Remove
        </Button>
      </DialogActions>
    </Dialog>
  );
};
