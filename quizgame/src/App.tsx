import React, { useState } from 'react';
import './App.css';
import Loginpage from './Component/Login/Loginpage';
import { Route, Routes } from 'react-router-dom';
import Quizgame from './Component/Quizgame/Quizgame';
import QuizQues from './Component/Quizgame/QuizQues';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './Component/SignUp/Signup';
import CreateQuiz from './Component/CreateQuiz/CreateQuiz';



function App() {
  const [NameQuiz, setNameQuiz] = useState<string>("");
  



  return (
    <div className="App ">

      <Routes>
        <Route>
        

          <Route path="/" element={<Loginpage ptitle = 'Quiz Application'/>} />
          <Route path='/Signup' element= {<Signup/>}/>
          <Route path= '/CreateQuiz' element={<CreateQuiz/>}/>
          <Route path='/Quizgames' >
          <Route path= "Quiz"  element={< QuizQues NameQuiz={NameQuiz} setNameQuiz={setNameQuiz} />} />
          <Route index element= {<Quizgame setNameQuiz={setNameQuiz} QuizCategoryList = "Quiz Category"/>}/>
          </Route>
        
        </Route>
      </Routes>
    </div>
  );
}

export default App;
