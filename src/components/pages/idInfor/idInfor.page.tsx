import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const IdInforPage = () => {
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const idNumber = parseInt(data.idnumber);

    axios
      .post(`http://localhost:3001/user/idinfor`, {
        idNumber,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);

        const data = res.data;

        setGender(data.data.gender);
        setDob(data.data.dob);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div>
        <form
          onSubmit={handleSubmit((data) => onSubmit(data))}
          className="white"
        >
          <h5 className="grey-text text-darken-3">ID Information</h5>
          <div className="input-field">
            <label htmlFor="idnumber">ID Number</label>
            <input
              type="text"
              id="idnumber"
              {...register("idnumber", {
                pattern: /^[0-9]+$/i,
                maxLength: 9,
                required: true,
                minLength: 9,
              })}
            />
            {errors.idnumber && errors.idnumber.type === "required" && (
              <span>This is required</span>
            )}
            {errors.idnumber && errors.idnumber.type === "maxLength" && (
              <span>Max length is 9</span>
            )}
            {errors.idnumber && errors.idnumber.type === "minLength" && (
              <span>Min length is 9</span>
            )}
            {errors.idnumber && errors.idnumber.type === "pattern" && (
              <span>Please enter 0-9 without V</span>
            )}
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Submit</button>
          </div>
        </form>
      </div>
      <div style={{ textAlign: "left" }}>
        <Box sx={{ width: "100%", maxWidth: 500 }}>
          <Typography variant="h5" component="div">
            Gender
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            className="white-text pink center-align"
          >
            {gender}
          </Typography>

          <Typography variant="h5" component="div">
            DOB
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            className="white-text pink center-align"
          >
            {dob}
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default IdInforPage;
