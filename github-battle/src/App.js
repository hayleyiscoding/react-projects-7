import { useEffect, useState } from "react";
import links from "./data";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Battle from "./components/Battle";

export default function App() {
  const [language, setLanguage] = useState("");
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const URL = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setUserData(data.items));
  }, [language, URL]);

  return (
    <div className={darkMode ? "container dark" : "container"}>
      <nav className='nav'>
        <div className='nav-top flex align-center'>
          <div className={darkMode ? "nav-left nav-left-dark" : "nav-left"}>
            <a
              href='/'
              className={darkMode ? "active-link-dark" : "active-link"}
            >
              Popular
            </a>
            <a href='/battle'>Battle</a>
          </div>
          <div className='nav-right'>
            {!darkMode ? (
              <button
                type='button'
                onClick={() => setDarkMode(true)}
                className='background-white'
              >
                🔦
              </button>
            ) : (
              <button type='button' onClick={() => setDarkMode(false)}>
                💡
              </button>
            )}
          </div>
        </div>
        <div className={darkMode ? "nav-bottom-dark" : "nav-bottom"}>
          <ul className='flex center'>
            {links.map((language, i) => (
              <li key={language}>
                <button
                  type='button'
                  className={` ${i === index && "active-link"} ${
                    darkMode && i === index ? "dark-active" : ""
                  }`}
                  onClick={() => {
                    setLanguage(language);
                    setIndex(i);
                  }}
                >
                  {language}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <Routes>
        <Route
          path='/'
          element={<Home darkMode={darkMode} userData={userData} />}
        />
        <Route path='battle' element={<Battle />} />
      </Routes>
    </div>
  );
}
