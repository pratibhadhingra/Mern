import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { DevTool } from "@hookform/devtools"

export interface FormValues {
  name: string;
  email: string;
  phoneNo: string;
  password: string;
  cpassword: string;
}

const Signup = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();


  const [user, setUser] = useState({
    name: '', email: '', phoneNo: '', paassword: '', cpassword: ''
  })

  const onsubmit = (data: FormValues) => {
    console.log("hello",data)
    setUser({...user,...data})
  };

  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)} className="signup_form">
        <h2>Sign up</h2>
        <div>
          <input
            type="text"
            // style={{ padding: "10px", borderRadius: "10px" }}
            placeholder="Enter your name"
            {...register("name")}
          />
          <span style={{ color: "red" }}> {errors.name?.message}</span>
        </div>
        <br />

        <div>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />
          <span style={{ color: "red" }}> {errors.email?.message}</span>
        </div>
        <br />

        <div>
          <input
            type="tel"
            placeholder="Enter your phone number"
            {...register("phoneNo")}
          />
          <span style={{ color: "red" }}> {errors.phoneNo?.message}</span>
        </div>
        <br />

        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <span style={{ color: "red" }}>{errors.password?.message}</span>
        </div>
        <br />

        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("cpassword")}
          />
          <span style={{ color: "red" }}>{errors.cpassword?.message}</span>
        </div>
        <br />

        <div>
          <button
            type="submit"
            // style={{ padding: "15px 35px", border: "none", borderRadius: "10px" }}
          >
            Register
          </button>
          <NavLink to='/login'>Already register</NavLink>
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default Signup;
