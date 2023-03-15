import jsPDF from "jspdf";
import React, { useState, useContext, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import QuestionObject from "../../Model/Question";
import { question } from "./Data/QuizquesData";

export default function QuizQues(props: any) {
  const [Body, setBody] = useState(<></>);
  const [hidden, sethidden] = useState(true);
  const { register, handleSubmit , formState: { errors }} = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    let cfrm = window.confirm("are you sure you want to submit ?");
    if (cfrm === true) {
      sethidden(false);
      console.log(data, "data");
      let json = JSON.stringify(data);
      localStorage.setItem("form-data", json);

      setBody(QuizAns(props));
    } else if (cfrm === false) {
      return;
    }
  };
  let quesSrNo: number = 0;
  // function ansSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  // }

  // const ansValue = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.type === "radio") {
  //     let question = event.target.name;
  //     let answer = event.target.value;
  //     props.setUserAns({ ...props.UserAns, [question]: answer });
  //   }

  //   if (event.target.type === "checkbox") {
  //     if (event.target.checked === true) {
  //       // props.UserAns.map((e: any) => console.log(e))
  //       setmultival([...multival, event.target.value]);
  //       let val = event.target.value;
  //       props.setUserAns({
  //         ...props.UserAns,
  //         [event.target.name]: [...multival, event.target.value],
  //       });

  //     } else {
  //       setmultival(multival.filter((e) => e !== event.target.value));
  //     }
  //   }
  // };
  
  
    let selCategory = localStorage.getItem('Category');
  useEffect(() => {
    if(selCategory){
      props.setNameQuiz(selCategory);
    }
  }, []);

  
  return (
    <>
      <div className="container ques-background rounded w-75">
        {hidden && (
          <form className="m-2 p-2" onSubmit={handleSubmit(onSubmit)}>
            <div
              id="title"
              className="h2 text-uppercase w-100 category-heading rounded p-1"
            >
              {props.NameQuiz}
            </div>

            {question.map((question: QuestionObject, index: any) => {
              
              
              
              if(props.NameQuiz === question.Category){
                quesSrNo++;
                return (
                  <div
                    className="text-start d-flex justify-content-center  rounded p-2"
                    key={index}
                  >
                    <div
                      className="card m-1 mt-2 w-75 ques-card cardeffect"
                      style={{ width: "70%" }}
                    >
                      <div className="card-body ques-card-body ">
                        <p className="card-text p-1 h4">
                          <span>Q.{quesSrNo}) </span>
                          {question.Question}
                        </p>
                        <p className="card-text">
                          {question.Options.map((option: any, index: any) => {
                            const name: any = question.id.toString();
                            if (question.questionType === "singleAnswer") {
                              return (
                                <li
                                  className="list-group-item h6 li-effect rounded"
                                  key={index}
                                >
                                  <input
                                    className="m-2"
                                    type="radio"
                                    key={index}
                                    id={option}
                                    value={option}
                                    // name = {question.id.toString()}
                                    {...register(name, { required: true })}
                                  />
                                  <label htmlFor={option} className='w-75 '>{option}</label>
                                  
                              
                                </li>
                                
                              );
                            }
                            if (question.questionType == "multipleAnswer") {
                              const name: any = question.id.toString();
                              return (
                                <li className="list-group-item  li-effect h6" key={index}>
                                  <input
                                    className="m-2"
                                    type="checkbox"
                                    key={index}
                                    id={option}
                                    value={option}
                                    {...register(name, { required: false })}
                                  />
                                  <label htmlFor={option} className='w-75 '>{option}</label>
                                </li>
                              );
                            }
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ); 
            }})}
            <button
              className="btn btn-outline-danger mt-2 mb-2 w-25"
              type="submit"
            >
              Submit
            </button>
          </form>
        )}
        {Body}
      </div>
    </>
  );
}

export function QuizAns(props: any) {
  let userData = JSON.parse(localStorage.getItem("form-data") as string);
  localStorage.removeItem('Category')
  let count: number = 0;































  let AnsJson = question
    .filter((e) => {
      return e.Category == props.NameQuiz;
    })
    .map((e) => {
      return (
        e.Question +
        " :     " +
        e.CorrectAnswer.map((t): number => e.Options[t as number])
      );
    });

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify({ AnsJson })
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "Answer.json";

    link.click();
  };

  let multival: string[] = [];

  let quesAnsArray: any = [];
  question.map((question) => {
    if (props.NameQuiz === question.Category) {
      question.CorrectAnswer.map((ans) => {
        if (question.questionType === "multipleAnswer") {
          multival.push(question.Options[ans as number]);
          // quesAnsArray.push(question.Options[ans as number])
        } else {
          quesAnsArray.push(question.Options[ans as number]);
        }
      });
      if (multival.length !== 0) {
        quesAnsArray.push(multival as any);
      }
      multival = [];
    }
  });



  Object.values(userData).map((element: any, index: any) => {

    if (Array.isArray(element) && Array.isArray(quesAnsArray[index])) {
      if(quesAnsArray[index].join()==element.join()){
        count++;
      }
  
   
    } else {
      if (element == quesAnsArray[index]) {
        count++;
        
      }
    }
  });

  return (
    <>
      <div className="m-2 p-2 ">
        <div id="title" className="h2 text-uppercase w-100 text-bg-danger rounded  d-flex justify-content-between">
          <div className="text-center mx-3">

          {props.NameQuiz} <span> Quiz Answer</span>
          </div>
          
          <div className="text-bg-warning rounded  px-2">
              Your Score: <span >{count}</span>
          </div>
        </div>
        
        
        
        {question.map((question: QuestionObject, index: any) => {
          if (props.NameQuiz === question.Category) {
            return (
              <div
                className="text-start d-flex justify-content-center rounded"
                key={index}
              >
                <div className="card m-1 mt-2" style={{ width: "70%" }}>
                  <div className="card-body ">
                    <p className="card-text  rounded p-1 h4">
                      <span>Q.) </span>
                      {question.Question}
                    </p>
                    <p className="card-text">
                      {question.Options.map((option: any, i: any) => {
                        if (question.questionType === "singleAnswer") {
                          return (
                            <li className="list-group-item h6" key={i}>
                              <input
                                disabled
                                className="m-2"
                                type="radio"
                                key={i}
                                id={question.id.toString()}
                                value={option}
                                name={question.id.toString()}
                              />
                              <label htmlFor={question.id.toString()}>
                                {option}
                              </label>
                            </li>
                          );
                        } else {
                          return (
                            <li className="list-group-item h6 " key={i}>
                              <input
                                disabled
                                className="m-2"
                                type="checkbox"
                                key={i}
                                id={question.id.toString()}
                                value={question.id.toString()}
                                name={question.id.toString()}
                              />
                              <label htmlFor={question.id.toString()}>
                                {option}
                              </label>
                            </li>
                          );
                        }
                      })}
                    </p>
                    <div className="h6 text-bg-success rounded p-1">
                      <span className="lead">
                        <strong>Ans:</strong>{" "}
                      </span>

                      {question.CorrectAnswer.map((e: any, index: any) => {
                        if (index > 0) return " , " + question.Options[e];
                        else {
                          return question.Options[e];
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}

        <div>
          <button className="btn btn-success w-25 mt-2 mb-2 btn-lg" onClick={exportData}>
            
            Download Result
          </button>
        </div>
      </div>
    </>
  );
}

//   question.CorrectAnswer.map((e) => {

//   Object.values (userData).map((t:any)=>{
//     console.log(t, '------------------im t')
//     console.log(question.Options[e as number], '--------------------im ans')
//    if(question.Options[e as number] === t){
//     count = count+1;
//     // console.log(count, 'inside')
//     return
//    }
//    else{

//    }
//     })
// })
