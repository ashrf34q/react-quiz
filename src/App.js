import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";

const initialState = {
  questions: [],

  // 'loading', 'ready', 'error', 'active', 'finished'
  status: "loading",
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "receivedData":
      return { ...state, questions: action.payload, status: "ready" };

    case "Error":
      return { ...state, status: "error" };

    case "start":
      return { ...state, status: "active" };
    default:
      throw new Error("Action unkown");
  }
}

function App() {
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "receivedData", payload: data }))
      .catch((err) => dispatch({ type: "Error" }));
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && <Question question={questions[index]} />}
      </Main>
    </div>
  );
}

export default App;
