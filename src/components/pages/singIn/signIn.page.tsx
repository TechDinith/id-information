import Box from "@mui/material/Box";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const [isUser, setIsUser] = useState(false);
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log("data", data);

    axios
      .post(`http://localhost:3001/user/signin`, {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);

        if (res.data) {
          setIsUser(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    navigate(`/idinfor`);
  };

  return (
    <div style={{ margin: "50px 400px" }}>
      <Box sx={{ width: "100%", maxWidth: 750 }}>
        <form
          onSubmit={handleSubmit((data) => onSubmit(data))}
          className="white"
        >
          <h5 className="grey-text text-darken-3">SignIn</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password")} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </Box>

      <p>
        Not having a account <a href="/signup">SignUp</a>
      </p>
    </div>
  );
};

export default SignInPage;
