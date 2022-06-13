import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [userInput, setUserInput] = useState({
    numberOfQuestions: 10,
    difficulty: "easy",
    category: 9,
  });
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`https://opentdb.com/api_category.php`);
        const data = await response.json();
        setCategories(data.trivia_categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const url = `https://opentdb.com/api.php?amount=${
        userInput.numberOfQuestions
      }&difficulty=${userInput.difficulty}&category=${Number(
        userInput.category
      )}&type=multiple`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //   useEffect(() => {
  //     if (formSubmitted) {
  //       fetchData();
  //       console.log(data);
  //     }
  //   }, [formSubmitted, fetchData]);

  // let selectedCategory = categories.find((item) =>
  //   item.name.includes(userInput.category)
  // );
  // return { ...userInput, categoryid: selectedCategory.id };

  function handleSubmit(event) {
    event.preventDefault();
    fetchData();
  }

  function handleChange(event) {
    setUserInput((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  }

  return (
    <main className='container text-center'>
      <h1>Setup Quiz</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='number'>Number of Questions</label>
        <input
          name='numberOfQuestions'
          type='number'
          placeholder='10'
          id='number'
          value={userInput.numberOfQuestions}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor='category'>Category</label>
        <select
          name='category'
          id='category'
          value={userInput.category}
          onChange={handleChange}
        >
          {categories?.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor='difficulty'>Select Difficulty:</label>
        <select
          name='difficulty'
          id='difficulty'
          value={userInput.difficulty}
          onChange={handleChange}
        >
          <option value='easy'>Easy</option>
          <option value='medium'>Medium</option>
          <option value='hard'>Hard</option>
        </select>
        <br />
        <button type='submit'>Start</button>
      </form>
    </main>
  );
}
