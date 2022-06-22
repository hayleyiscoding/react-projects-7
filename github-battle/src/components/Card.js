export default function Card({ user, index, userData, darkMode }) {
  const { id, name, owner, stargazers_count, forks_count, open_issues_count } =
    user;

  return (
    <article className='card flex column center'>
      <h2>#{index + 1}</h2>
      <img src={owner.avatar_url} alt={id} />
      <h3 className={darkMode ? "dark-h3" : ""}>{name}</h3>
      <div>
        <ul className='stats'>
          <li>
            <span>👤</span>
            <a>{name}</a>
          </li>
          <li>
            <span>⭐️</span>
            <a>{stargazers_count} stars</a>
          </li>
          <li>
            <span className='fork-icon'>⑂</span>
            <a>{forks_count} forks</a>
          </li>
          <li>
            <span>⚠️</span>
            <a>{open_issues_count} open issues</a>
          </li>
        </ul>
      </div>
    </article>
  );
}
