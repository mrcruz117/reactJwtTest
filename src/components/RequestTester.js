import React, { useState } from "react";
import { Button, Card, ButtonGroup } from "@mui/material";
import axios from "axios";

export default function RequestTester() {
  const [response, set_response] = useState([{ username: "test" }]);
  const [jwt, set_jwt] = useState("");

  const makeRequest = () => {
    // add https request for JWT testing later

    axios
      .get("http://localhost:3344/posts", {
        headers: { authorization: `Bearer ${jwt}` },
      })
      .then((res) => {
        console.log(res.data[0]);
        set_response(res.data);
      })
      .catch((err) => console.error(err));
  };

  const login = (name) => {
    const body = {
      username: name,
    };

    axios
      .post("http://localhost:3344/login", body)
      .then((res) => {
        const token = res.data.accessToken;
        console.log(res.data.accessToken);
        console.log(`${name} logged in`);
        set_jwt(token);
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
        <ButtonGroup variant="contained">
          <Button
            onClick={(e) => {
              login(e.target.value);
            }}
            value={"Michael"}
          >
            Michael
          </Button>
          <Button
            onClick={(e) => {
              login(e.target.value);
            }}
            value={"Manny"}
          >
            Manny
          </Button>
        </ButtonGroup>
        <Button
          onClick={makeRequest}
          variant="contained"
          style={{ marginTop: "20px" }}
        >
          Get Request
        </Button>
        <br />
        <div>{response[0].username}</div>
      </Card>
    </div>
  );
}
