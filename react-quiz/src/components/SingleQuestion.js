import { useState } from "react";
import Modal from "./Modal";

export default function SingleQuestion({
  questions,
  setCurrentIndex,
  currentIndex,
  userInput,
}) {
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const question = questions[currentIndex];

  const answers = question.incorrect_answers
    .concat(question.correct_answer)
    .sort(() => Math.random() - 0.5);

  function getNextQuestion(item) {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    if (question.correct_answer.includes(item)) {
      setScore((prevScore) => prevScore + 1);
      setTotalQuestions((prevTotal) => prevTotal + 1);
    } else {
      setTotalQuestions((prevTotal) => prevTotal + 1);
    }
  }

  function showAlert(item) {
    setTotalQuestions((prevTotal) => prevTotal + 1);
    setShowModal(true);
    if (question.correct_answer.includes(item)) {
      setScore((prevScore) => prevScore + 1);
    }
  }

  function skipQuestion() {
    if (currentIndex < userInput.numberOfQuestions - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setTotalQuestions((prevTotal) => prevTotal + 1);
    } else {
      showAlert();
    }
  }

  return (
    <div className='flex column'>
      <section className='score text-right'>
        <h6>
          Correct Answers: {score}/{totalQuestions}
        </h6>
      </section>
      <section className='question text-center'>
        <h2 dangerouslySetInnerHTML={{ __html: question.question }}></h2>
        <ul>
          {answers.map((item) => {
            return (
              <li key={item.question}>
                <button
                  className='btn btn-primary'
                  type='button'
                  onClick={
                    currentIndex < userInput.numberOfQuestions - 1
                      ? () => getNextQuestion(item)
                      : () => showAlert(item)
                  }
                  dangerouslySetInnerHTML={{ __html: item }}
                ></button>
              </li>
            );
          })}
        </ul>
        <div className='text-right'>
          {" "}
          <button type='button' onClick={skipQuestion} className='btn'>
            Next Question -->
          </button>
        </div>
      </section>
      <section>
        <Modal
          score={score}
          setScore={setScore}
          showModal={showModal}
          setShowModal={setShowModal}
          setTotalQuestions={setTotalQuestions}
          totalQuestions={totalQuestions}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </section>
    </div>
  );
}
