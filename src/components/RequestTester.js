import React, { useState } from "react";
import { Button, Card, ButtonGroup } from "@mui/material";
import axios from "axios";

export default function RequestTester() {
  const [response, set_response] = useState("Make a request");
  // const [jwt, set_jwt] = useState("");

  const makeRequest = () => {
    // add https request for JWT testing later

    axios
      .get("/myapp/", {
        headers: { Authorization: `JWT ${getCookie("access")}` },
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
        const accessToken = res.data.access;
        const refreshToken = res.data.refresh;
        console.log(res.data);
        console.log(`${name} logged in`);
        document.cookie = "access=" + accessToken;
        document.cookie = "refresh=" + refreshToken;
      })
      .catch((err) => console.error(err));
  };

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

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
