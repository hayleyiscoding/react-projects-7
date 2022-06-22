import Card from "./Card";

export default function Home({ darkMode, userData }) {
  return (
    <main
      className={
        darkMode ? "user-container container dark" : "user-container container"
      }
    >
      {userData &&
        userData.map((user, index) => {
          return (
            <Card
              key={user.id}
              user={user}
              index={index}
              userData={userData}
              darkMode={darkMode}
            />
          );
        })}
    </main>
  );
}
