import React, { useState } from "react";
import { Button, Card, ButtonGroup } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";

export default function RequestTester() {
  const [response, set_response] = useState("Make a request");
  // const [jwt, set_jwt] = useState("");

  const makeRequest = () => {
    // add https request for JWT testing later

    axios
      .get("/myapp/", {
        headers: { Authorization: `JWT ${Cookies.get("access")}` },
      })
      .then((res) => {
        console.log("success: ", res.data);
        set_response("success!");
      })
      .catch((err) => {
        set_response("Error: Forbiden");
        console.error(err);
      });
  };

  const login = (name) => {
    const body = {
      username: "ITDepartment",
      password: "DemoJWT1@",
    };

    axios
      .post("/auth/jwt/create", body)
      .then((res) => {
        const { access, refresh } = res.data;

        console.log(res.data);
        console.log(`${name} logged in`);
        Cookies.set("access", access);
        Cookies.set("refresh", refresh);
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
        <div>{response}</div>
      </Card>
    </div>
  );
}
