import React, { useState } from "react";
import { Button, Card } from "@mui/material";
import axios from "axios";

export default function RequestTester() {
  const [response, set_response] = useState("Test info");

  const makeRequest = () => {
    // add https request for JWT testing later

    set_response("button working");
  };
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
          flexDirection: "column",
        }}
      >
        <Button onClick={makeRequest} variant="contained">
          GO
        </Button>
        <br />
        <div style={{ marginTop: "10px" }}>{response}</div>
      </Card>
    </div>
  );
}
