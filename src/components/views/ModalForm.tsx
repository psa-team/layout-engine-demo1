import { Box, Typography } from "@mui/material";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface ModalFormProps {
  title?: string,
  children?: React.ReactNode;
}

export default function ModalForm(props: ModalFormProps) {
  return(
    <Box sx={{ ...style, width: 400 }}>
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.title}
    </Typography>
    {props.children}
  </Box>
  );
}