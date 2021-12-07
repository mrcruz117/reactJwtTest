import React, { useState } from "react";
import { Button, Card } from "@mui/material";
import axios from "axios";

export default function RequestTester() {
  const [response, set_response] = useState([{ username: "test" }]);

  const makeRequest = () => {
    // add https request for JWT testing later

    axios
      .get("http://localhost:3344/posts")
      .then((res) => {
        console.log(res.data);
        set_response(res.data);
      })
      .catch((err) => console.error(err));
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
        <div style={{ marginTop: "10px" }}>{response[0].username}</div>
      </Card>
    </div>
  );
}
