let apiHost = "https://gpmeyers-imagequiz.herokuapp.com";

let getQuizzes = async () => {
    return fetch(apiHost + '/quizzes')
    .then(res => res.json());
}

let getQuiz = async (id) => {
    console.log(apiHost + '/quizzes/');
    return fetch(apiHost + '/quizzes/' + id)
    .then(res => res.json());
}

let addScore = (score) => {
    return fetch(apiHost + '/score', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(score)
    });
}

let api = {
    getQuizzes: getQuizzes,
    getQuiz: getQuiz,
    addScore: addScore
};

export default api;