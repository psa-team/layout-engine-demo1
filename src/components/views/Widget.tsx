import { Paper, TextField, Typography, Divider } from "@mui/material";

interface WidgetProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const Widget = (props: WidgetProps) => {
  return (
    <Paper sx={{m:1, p:1}}>
      <Typography>
        {props.title}
      </Typography>
      <Divider />
      <br />
      {props.children}
    </Paper>
  );
};

export default Widget;