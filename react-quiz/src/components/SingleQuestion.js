export default function SingleQuestion({
  questions,
  setCurrentIndex,
  currentIndex,
}) {
  const question = questions[currentIndex];

  const answers = question.incorrect_answers
    .concat(question.correct_answer)
    .sort(() => Math.random() - 0.5);

  return (
    <div className='container'>
      <section>
        <h6>Correct Answers: 0/0</h6>
      </section>
      <section>
        <h2 dangerouslySetInnerHTML={{ __html: question.question }}></h2>
        <ul>
          {answers.map((item) => {
            return (
              <li key={item.question}>
                <button
                  type='button'
                  onClick={() => setCurrentIndex((prevIndex) => prevIndex + 1)}
                  dangerouslySetInnerHTML={{ __html: item }}
                ></button>
              </li>
            );
          })}
        </ul>
        <button
          type='button'
          onClick={() => setCurrentIndex((prevIndex) => prevIndex + 1)}
        >
          Next Question
        </button>
      </section>
    </div>
  );
}
