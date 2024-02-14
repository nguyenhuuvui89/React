
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  return (
    <div className="App">
      <FriendList/>
    </div>
  );
}

function FriendList() {
  return (
    <div>
      {initialFriends.map((e, i) => (
        <Friend friend={e} key={i} />
      ))}
      <button type="button" className="addFriend btn btn-sm btn-warning ">Add friend</button>
    </div>
  );
}

function Friend({friend}) {
  return (
    <div className='d-flex justify-content-between align-items-center m-2'>
      <img
        src={`${friend.image}`}
        className="rounded-circle"
        style={{ width: "50px",  height: "50px"}}
        alt="Avatar"
      />
     <div  className='d-flex flex-column'>
        <span>{friend.name}</span>
        <span className='green'>Expense note</span>
     </div>
     <button type="button" className="btn btn-sm btn-warning">Select</button>
    </div>
  );
}
export default App;
