import React, { useState, createContext } from "react";
import { categories } from "./Data/QuizCategory";
import img from "../.././Assests/Image/quiz-image.jpg";
import category from "../../Model/Category";
import { Link } from "react-router-dom";
import QuizQues from "./QuizQues";

export default function Quizgame(props: any) {


  function handleQuiz(params: string) {
 
    props.setNameQuiz(params);
    localStorage.setItem('Category', params);
  }


  return (
    <>
      <div className="h1">{props.QuizCategoryList}</div>
      <div className="d-flex">
        {categories.map((category: category, index: number) => {
     
          return (
            <div className="m-2" key={index}>
              <div className="card cardeffect"  style={{ width: "25srem" }}>
                <div className="" >
                  <img
                    className="card-img-top"
                    src={category.image}
                    alt="Card image cap"
                    style={{ maxHeight: "13rem" }}
                    
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title ">
                    <span>{category.Id}. </span>
                    {category.name}
                  </h5>
                  <p className="card-text text-start">{category.description}</p>
                  

                  <Link
                    to="/Quizgames/Quiz"
                    className="btn btn-primary w-50"
                    onClick={() => handleQuiz(category.name)}
                  >
                   
                    Start Quiz
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
