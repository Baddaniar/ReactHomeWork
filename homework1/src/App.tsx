import UserBlock from "./components/UserBlock";

const Users = [
  {
    name: "Dan",
    statusText: "Первый пользователь",
    avatar: "https://picsum.photos/200",
    onlineStatus: true,
  },
  {
    name: "Aslan",
    statusText: "Второй пользователь",
    avatar: "https://picsum.photos/201",
    onlineStatus: true,
  },
  {
    name: "Ilyas",
    statusText: "Третий пользователь",
    avatar: "https://picsum.photos/202",
    onlineStatus: false,
  },
];

function App() {
  return (
    <div>
      {Users.map( user => <UserBlock {...user}/>)}
    </div>
  );
}

export default App;
