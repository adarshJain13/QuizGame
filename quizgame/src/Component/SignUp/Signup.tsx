import React from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode: 'onChange'});
  const onSubmit = (data: any) => {
    console.log(data);
    toast.success("Hurrrayyy!! Successfully regiesterd");

    localStorage.setItem(data.email, JSON.stringify(data));
    setTimeout(() => {
      navigate("/");
    }, 220);
  };

  return (
    <div className="p-3  d-flex justify-content-center align-items-center text-start">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border m-4 p-4 rounded shadow-lg w-50"
        style={{ boxShadow: "0px 2px 50px 2px" }}
      >
        <div className="h3 text-center text-capitalize py-1">
          <label>Sign Up</label>
        </div>
        <div className="form-group">
          <label className="h6" htmlFor="fullname">
            {" "}
            Full Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            {...register("fullname", {
              required: true,
              pattern: /^[a-zA-Z]{2,40} [a-zA-Z]{2,40}$/,
            })}
          />

          {errors.fullname?.type === "required" && (
            <small className="form-text text-danger">
              Please Enter Your Full Name
            </small>
          )}
          {errors.fullname?.type === "pattern" && (
            <small id="Small" className="form-text text-danger">
              Please Enter Valid Full Name
            </small>
          )}
        </div>

        <div className="form-group">
          <label className="h6" htmlFor="phone">
            Phone Number <span className="text-danger">*</span>
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            {...register("phone", {
              required: true,
              pattern: /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/,
            })}
          />
          {errors.phone?.type === "required" && (
            <small id="Small" className="form-text text-danger">
              Please Enter Your Phone Number
            </small>
          )}
          {errors.phone?.type === "pattern" && (
            <small id="Small" className="form-text text-danger">
              Please Enter Valid Phone Number
            </small>
          )}
        </div>

        <div className="form-group">
          <label className="h6" htmlFor="email">
            Email address <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register("email", {
              required: true,
              pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
          />
          {errors.email?.type === "required" && (
            <small id="Small" className="form-text text-danger">
              Please Enter Your Email
            </small>
          )}
          {errors.email?.type === "pattern" && (
            <small id="Small" className="form-text text-danger">
              Please Ente2r Valid Email
            </small>
          )}
        </div>

        <div className="form-group">
          <label className="h6" htmlFor="password">
            Password <span className="text-danger">*</span>
          </label>
          <input
            type="password"
            className="form-control mb-1"
            id="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
            })}
          />
          {errors.password?.type === "required" && (
            <small id="Small" className="form-text text-danger">
              Please Enter Your Password
            </small>
          )}
          {errors.password?.type === "pattern" && (
            <small id="Small" className="form-text text-danger">
              Password should contain 1 lowercase, 1 uppercase, at least 1
              number and 8 letters{" "}
            </small>
          )}
        </div>
        {/* <div className="form-group">
          <label className="h6" htmlFor="select state">
            Select Your State <span className="text-danger">*</span>
          </label>
          <select
            className="form-select"
            {...register("state", { required: true })}
          >
            <option value="">Select your state</option>
            <option value="MH">MH</option>
            <option value="GJ">GJ</option>
            <option value="CG">CG</option>
            <option value="Goa">Goa</option>
          </select>
        </div> */}
        {errors.state?.type === "required" && (
          <small id="Small" className="form-text text-danger">
            Please Select Your State
          </small>
        )}
        <div className=" mt-2">
          {" "}
          <label className="h6 mx-2" htmlFor="gender">
            Gender: <span className="text-danger">*</span>{" "}
          </label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="male"
              value="male"
              {...register("gender", { required: true })}
            />
            <label className="form-check-label" htmlFor="male">
              male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input "
              type="radio"
              id="female"
              value="female"
              {...register("gender", { required: true })}
            />
            <label className="form-check-label" htmlFor="female">
              female
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input "
              type="radio"
              id="other"
              value="other"
              {...register("gender", { required: true })}
            />
            <label className="form-check-label" htmlFor="other">
              other
            </label>
          </div>
          {errors.gender?.type === "required" && (
            <small id="Small" className="form-text text-danger">
              Please Select Your Gender
            </small>
          )}
        </div>

        <br></br>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input  "
            type="checkbox"
            id="terms"
            {...register("agree", { required: true })}
          />
          <label className="form-check-label h6" htmlFor="terms">
            I agree all terms and conditons
          </label>
          <span className="text-danger">*</span>
          <br></br>
          {errors.agree?.type === "required" && (
            <small id="Small" className="form-text text-danger">
              Agree to Terms and Conditons
            </small>
          )}
        </div>

        <div className="form-check d-flex justify-content-center">
          <button className="btn btn-outline-primary shadow w-25 mt-2" type="submit">
            {" "}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
