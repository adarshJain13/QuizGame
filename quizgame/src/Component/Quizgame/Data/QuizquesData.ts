import QuestionObject from "../../../Model/Question";

export const question: QuestionObject[] = [
  {
    id: 0,
    Category: "React",
    Question: "What is the correct command to create a new React project?",
    questionType: "singleAnswer",
    Options: ["npx create-react-app", "npm create-react-app myReactApp", "npx create-react-app myReactApp"],
    CorrectAnswer: [0],
  },
  {
    id: 1,
    Category: "Java",
    Question: "What is the capital of Spain?",
    questionType: "singleAnswer",
    Options: ["java1", "ajav2", "vaja3"],
    CorrectAnswer: [1],
  },
  {
    id: 2,
    Category: "React",
    Question: "What command is used to start the React local development server?",
    questionType: "singleAnswer",
    Options: ["npm build", "npm start", "npm serve"],
    CorrectAnswer: [1],
  },
  {
    id: 3,
    Category: "React",
    Question: "What command is used to start the React local development server?",
    questionType: "singleAnswer",
    Options: ["npm build ", "start", "serve"],
    CorrectAnswer: [1],
  },
  {
    id: 4,
    Category: "Angular",
    Question: "What is the capital of Italy?",
    questionType: "singleAnswer",
    Options: ["Venice", "Rome", "Florence"],
    CorrectAnswer: [1]
  },
  {
    id: 5,
    Category: "Java",
    Question: "What is the capital of Spain?",
    questionType: "multipleAnswer",
    Options: ["Madrid", "Barcelona", "Seville"],
    CorrectAnswer: [1,2]
  },
  {
    id: 6,
    Category: "React",
    Question: "What is the default local host port that a React development server uses?",
    questionType: "singleAnswer",
    Options: [3000, 3500, 2456],
    CorrectAnswer: [0]
  },
  {
    id: 7,
    Category: "Angular",
    Question: "What is the capital of yes?",
    questionType: "singleAnswer",
    Options: ["Venice", "Rome", "Florence"],
    CorrectAnswer: [0]
  },
  {
    id: 8,
    Category: "Java",
    Question: "What is the capital of yes?",
    questionType: "multipleAnswer",
    Options: ["Venice", "Rome", "Florence"],
    CorrectAnswer: [1,2]  
  }

  
];
