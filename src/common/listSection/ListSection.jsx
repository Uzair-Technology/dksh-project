import React from "react";
import { Grid } from "@mui/material";
import ListCard from "../../components/cards/ListCard";

const ListSection = () => {
  return (
    <div className="grid__section">
      <div className="container">
        <div className="grid__section--list">
          <Grid container spacing={2}>
            {Array(10)
              .fill(0)
              .map((item, i) => (
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} key={i}>
                  <ListCard />
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ListSection;
