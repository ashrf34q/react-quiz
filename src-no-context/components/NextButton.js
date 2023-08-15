function NextButton({ dispatch, answer, index, numQuestions }) {
  return answer != null ? (
    index < numQuestions - 1 ? (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "newQuestion" })}
      >
        Next
      </button>
    ) : (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Submit
      </button>
    )
  ) : null;
}

export default NextButton;
