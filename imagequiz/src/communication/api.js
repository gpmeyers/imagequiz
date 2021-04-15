let apiHost = "https://gpmeyers-imagequiz.herokuapp.com";

let getQuizzes = () => {
    return fetch(apiHost + '/quizzes')
    .then(response => response.json());
}

let getQuiz = (id) => {
    return fetch(apiHost + '/quizzes/' + id)
    .then(response => response.json());
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