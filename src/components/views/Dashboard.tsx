import { Box, Typography } from "@mui/material";
import React from "react";
import { viewDictionary } from "../../lib/viewDictionary";
import Widget from "./Widget";

interface DashboardProps {
  name: string;
  children: JSX.Element | JSX.Element[];
  other: any;
}

const Dashboard = ({ name, children, ...other }: DashboardProps) => {
  if (!other) {
    return <h5>loading</h5>;
  }
  const context = (other as any).context;
  const widgets = Object.entries(context.content).map(item => {
    const [key,value] = item;
    if (viewDictionary[key]){
      const Widget = viewDictionary[key];
      return <Widget/>;
    }
    return (
      <Widget key={key} title={key} >
        <React.Fragment>
          {JSON.stringify(value)}
        </React.Fragment>
      </Widget>
    )
  });


  return (
    <Box sx={{ background: '#ddd', p: 1, m: -2 }}>
      <Typography>
        {name}
      </Typography>
      <br />
      <Box sx={{
        display: "flex",
        flexWrap: 'wrap',
      }}>
        {children}
        {widgets}
      </Box>
    </Box>
  );
};

export default Dashboard;