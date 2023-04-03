import React from "react";
import GridCard from "../../components/cards/GridCard";
import { Grid } from "@mui/material";

const GridSection = ({ data }) => {
  return (
    <div className="grid__section">
      <div className="container">
        <div className="grid__section--list">
          <Grid container spacing={2}>
            {data?.map((item, i) => (
              <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={i}>
                <GridCard item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default GridSection;
