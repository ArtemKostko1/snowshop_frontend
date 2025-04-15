import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";

const ModalDialog = ({
  open,
  setOpen,
  fullScreen,
  modalTitle,
  modalDescription,
  modalButtonLabel,
  action,
  handleConfirm,
}) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (open) {
      setInputValue("");
    }
  }, [open])

  const handleCloseModalDialog = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const isConfirmButtonDisabled =
    action === "reboot" && inputValue.toLowerCase() !== "перезагрузить";

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleCloseModalDialog}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title" sx={{ whiteSpace: "nowrap" }}>
        {modalTitle}
      </DialogTitle>
      <DialogContent>
        {action === "reboot" && (
          <>
            <DialogContentText sx={{ marginTop: 2 }}>
              Пожалуйста, введите слово "перезагрузить" для подтверждения
            </DialogContentText>

            <TextField
              autoFocus
              autoComplete="off"
              margin="dense"
              placeholder="Введите"
              type="text"
              size="small"
              fullWidth
              value={inputValue}
              onChange={handleInputChange}
            />
          </>
        )}
        <DialogContentText sx={{ marginTop: 1 }}>
          {modalDescription}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleCloseModalDialog}
          sx={{ color: "red" }}
        >
          Отмена
        </Button>
        <Button
          onClick={handleConfirm}
          disabled={isConfirmButtonDisabled}
        >
          {modalButtonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDialog;
