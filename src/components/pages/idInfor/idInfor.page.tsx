import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
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
    console.log("data", data);
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
          <Typography variant="h4" component="div">
            Gender: {gender}
          </Typography>

          <Typography variant="h4" component="div">
            DOB: {dob}
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default IdInforPage;
