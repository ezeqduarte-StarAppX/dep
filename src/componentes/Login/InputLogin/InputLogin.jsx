import React, { useState } from "react";
import "./inputlogin.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { VisibilityOff } from "@mui/icons-material";

export default function InputLogin({ text1, text2, password }) {
  const [see, SetSee] = useState(true);

  const seePasword = () => {
    SetSee(!see);
  };

  return (
    <>
      {password ? (
        <div className="input-Login">
          <p className="input-Login-p1">{text1}</p>

          {see ? (
            <>
              <input type="password"></input>
              <RemoveRedEyeIcon
                onClick={seePasword}
                className="see-pasword"
              ></RemoveRedEyeIcon>
            </>
          ) : (
            <>
              <input type="text"></input>
              <VisibilityOff
                onClick={seePasword}
                className="see-pasword"
              ></VisibilityOff>
            </>
          )}

          {text2 ? <span className="wrong-pass">{text2}</span> : null}
        </div>
      ) : (
        <div className="input-Login">
          <p className="input-Login-p1">{text1}</p>
          <input type="text" />
        </div>
      )}
    </>
  );
}
