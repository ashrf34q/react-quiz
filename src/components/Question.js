function Question({ question }) {
  return (
    <div>
      <h4>{question.question}</h4>

      <div className="options">
        {question.options.map((option) => (
          <button className="btn">{option}</button>
        ))}
      </div>
    </div>
  );
}

export default Question;