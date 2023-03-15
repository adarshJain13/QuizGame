import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import quizimg from "../.././Assests/Image/quiz-image.jpg";
import ToastComponent from "../ToastComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

export default function Loginpage(props: any) {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode: 'onChange'});

  const navigate = useNavigate();

  // const launchQuiz = () => {
  //   if (email === "Adarsh.jain@synoverge.com" && password === btoa("jain123")) {
  //     toast.success("Welcome");
  //     setTemp(!temp);

  //     navigate("/Quizgames");
  //   } else if (email === "" || email === null || email === undefined) {
  //     setToast(true);
  //     seterrappear("Email required");

  //     toast.error("Email is Required");
  //   } else if (password === "" || password === null || password === undefined) {
  //     setToast(true);
  //     seterrappear("Password required");
  //   } else {
  //     setToast(true);
  //   }
  // };
  const onSubmit = (data: any) => {
    console.log(data , 'Input data of user');
    const UserData: any = JSON.parse(localStorage.getItem(data.email)!);
    console.log(UserData, 'local storage data of userData')
    if (UserData === null) {
      toast.error("No Login Data Found");
    } else if (data.password !== UserData.password) {
      toast.warning("Wrong Password")
    } else {
      toast.success("Login Successfull",{position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",});
      
      setTimeout(() => {
        navigate("/Quizgames");
      }, 800);
  
    }
  };

  return (
    <>
      <ToastContainer />
      <section>
        <div    id="LogInCard" className="container w-75  d-flex justify-content-center align-items-center">
          <div
            className="row mt-3 border rounded shadow-lg"
         
            
          >
            <div className="col-6 p-0 text-black ">
              <div className=" ms-xl-4 mt-3">
                <i className="me-3 mt-xl-4" style={{ color: "#709085" }}></i>
                <span className="h1 fw-bold ">{props.ptitle}</span>
              </div>
              <div className="d-flex justify-content-center pb-3 pt-3">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{ width: "23rem" }}
                >
                  <h3
                    className="fw-normal mb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Log in
                  </h3>

                  <div className="form-outline mb-4 px-2">
                    <label
                      className="form-label float-start"
                      htmlFor="emailAddress"
                    >
                      Email address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      id="emailAddress"
                      className="form-control"
                      placeholder="abcd12@xyz.com"
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
                        Please Enter Valid Email
                      </small>
                    )}
                  </div>
                  <div className="form-outline mb-4 px-2">
                    <label
                      className="form-label float-start"
                      htmlFor="password"
                    >
                      Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      autoComplete=""
                      placeholder="********"
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
                   
                  </div>
                  <div className="pt-1 mb-4 px-2">
                    <button
                      className="btn btn-primary w-25"
                      type="submit"
                      // onClick={launchQuiz}
                    >
                      Login
                    </button>
                  </div>
                  <p className=" mb-5 pb-lg-2 px-2">
                    <a
                      className="text-primary text-uppercase border rounded p-2"
                      href="/Signup"
                    >
                      New User ?
                    </a>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-6 p-0 ">
              <img
                src={quizimg}
                id="LogInImg"
                alt=""
                className="img-fluid h-100"
                style={{
                 
               
                  borderRadius: "0 10px 10px 0px",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
