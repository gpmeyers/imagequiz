import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import flowers from '../flowers';
import api from '../communication/api';

const Quiz = ({ name }) => {
    let quizNum = 0;
    for(let i = 0; i < flowers.length; i++){
        if(flowers[i].name === name){
            quizNum = i;
            break;
        }
    }

    const [quiz, setQuiz] = useState([]);

    useEffect(() => {
        api.getQuiz(quizNum)
        .then(res => setQuiz(res))
        .catch(e => console.log(e));
    }, []);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    let handleAnswerOptionClick = (isCorrect) => {
        if(isCorrect){
            setScore(score + 1);
        }

        if(currentQuestion + 1 < quiz.length){
            setCurrentQuestion(currentQuestion + 1);
        }
        else{
            setShowScore(true);
        }
    }

    let handleRetryQuiz = () => {
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
    }

    return (
        <div>
            {quiz && (showScore ? (
                <div className="text-center font-weight-bolder display-3 mt-3">
                    You scored {score} out of {quiz.length}<br />
                    <div className="d-flex mx-auto justify-content-center mt-3 w-75">
                        <Link to="/home" className="btn btn-primary my-auto btn-block mx-3 h-100">Home</Link>
                        <button className="btn btn-primary my-auto btn-block mx-3 h-100" onClick={() => handleRetryQuiz()}>Retry</button>
                    </div>
                </div>
            ) : (
                <div>
                    <div>
                        <div className="text-center font-weight-bolder m-3 display-3">
                            <span>Question {currentQuestion + 1}</span>/{quiz.length}
                        </div>
                        <img className="rounded mx-auto d-block mt-3 mb-3" src={quiz[currentQuestion].picture} alt="" />
                    </div>
                    <div className="d-flex mx-auto justify-content-center mt-3 w-75">
                        {quiz[currentQuestion].choices.map((choice) => (
                            <button className="btn btn-primary my-auto btn-block mx-3 h-100" onClick={() => handleAnswerOptionClick(choice === quiz[currentQuestion].answer)}>{choice}</button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Quiz;