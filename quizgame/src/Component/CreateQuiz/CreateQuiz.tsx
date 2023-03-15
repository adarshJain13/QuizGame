import React, { createElement } from "react";
import { useForm } from "react-hook-form";

export default function CreateQuiz() {
  let srno = 0;
  const {register, handleSubmit} = useForm();

  function addNewOption(e: any) {
    e.preventDefault();

    console.log(srno);
    if (srno <= 1) {
      srno++;
      var venosHeader = React.createElement(
        "div",
        { className: "form-group row mb-2" },
        React.createElement("label", {className: 'col-sm-3 col-form-label', htmlFor: 'optionLabel' }),
        React.createElement("input", {className: 'form-control mx-2', type: 'text' })
      );
      console.log(venosHeader)
    }
    console.log(srno);
  }

  const onSubmit = (data:any) =>{
    console.log(data)
  }

  return (
    <>
    <div className="h1"> Create Your Quiz Questions</div>
      <div className=" p-3 d-flex align-items-center justify-content-center">
        <form className="border m-4 p-4 rounded shadow-lg" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="Select-category" className="float-start mb-2"><strong>Select your category Question</strong></label>
        <select className="form-select mb-2" {...register('Category',{required:true})}>
                        <option value="">Select your Category</option>
                        <option value="React">React</option>
                        <option value="Java">Java</option>
                        <option value="Angular">Angular</option>
                        <option value="others">others</option>
                    </select>
          <div className="form-group pb-2 mb-2 text-start">
            <label htmlFor="QuestionLabel" className="mb-2">
              <strong>Please Enter Your Question</strong>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Question"
              size={50}
              {...register('Question',{required:true})}
            />
          </div>
          <div className="form-group row mb-2">
            <label htmlFor="optionLabel" className="col-sm-3 col-form-label">
              Options: {srno}
            </label>
            <div className="col-sm-9 d-flex">
              <input
                type="text"
                className="form-control mx-2"
                placeholder="Enter only one Option"
                {...register(`Options${srno}`,{required:true})}
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label htmlFor="optionLabel" className="col-sm-3 col-form-label">
              Options: {srno += 1}
            </label>
            <div className="col-sm-9 d-flex">
              <input
                type="text"
                className="form-control mx-2"
                placeholder="Enter only one Option"
                {...register(`Options${srno}`,{required:true})}
              />
            </div>
       
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-outline-secondary m-2 "
                onClick={addNewOption}
              >
                <strong>+</strong>
              </button>
            </div>
          </div>
          <div>
            <label className="h6 mx-2" htmlFor="QuestionType">
              Question Type <span className="text-warning">*</span>{" "}
            </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="Single"
                value="Single"
                
                {...register('questionType',{required:true})}
              />
              <label className="form-check-label" htmlFor="Single">
                Single Choice Question
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input "
                type="radio"
                id="multiple"
                value="multiple"
           
                {...register('questionType',{required:true})}
              />
              <label className="form-check-label" htmlFor="multiple">
                Multiple Choice Question{" "}
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Add Your Question
          </button>
        </form>
      </div>
    </>
  );
}
