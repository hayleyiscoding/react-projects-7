export default function Modal({
  setTotalQuestions,
  totalQuestions,
  score,
  showModal,
  setScore,
  setShowModal,
  setCurrentIndex,
}) {
  function playAgain() {
    setTotalQuestions(0);
    setScore(0);
    setShowModal(false);
    setCurrentIndex(null);
  }
  return (
    <div>
      {showModal && (
        <div className='modal-container'>
          <div className='modal'>
            <h1>Congrats!</h1>
            <h3>
              You answered {(score / totalQuestions) * 100}% of questions
              correctly
            </h3>
            <button type='button' onClick={playAgain} className='btn'>
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
