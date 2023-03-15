interface QuestionObject {
  id: Number;
  Category: String; //react ,.net
  Question: String;
  questionType: String; //'boolean','multiple'
  Options: any[];
  CorrectAnswer: Number[];
}

export default QuestionObject;
