import React from "react";
import { Button, Card } from "@mui/material";

export default function RequestTester() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        elevation={6}
        style={{
          marginTop: "100px",
          height: "200px",
          width: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="contained">GO</Button>
      </Card>
    </div>
  );
}
