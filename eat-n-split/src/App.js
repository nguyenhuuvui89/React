import { useState } from "react";
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
      <FriendList />
    </div>
  );
}

function FriendList() {
  const [friend, setFriend] = useState(false);
  const [friendList, setFriendList] = useState(initialFriends);
  const [friendName, setFriendName] = useState("");
  const [friendImage, setFriendImage] = useState("https://i.pravatar.cc/48");

  function handleAddFriend(e) {
    e.preventDefault();
    const addNewFriend = {
      id: Date.now(),
      name: friendName,
      image: friendImage,
      balance: 0,
    };
    setFriendList((friendList) => [...friendList, addNewFriend]);
  }
  return (
    <div>
      {friendList.map((e, i) => (
        <Friend friend={e} key={i} />
      ))}
      <Button
        number="2"
        newClass="addFriend"
        friend={friend}
        setFriend={setFriend}
      >
        {" "}
        Add friend
      </Button>
      {friend && (
        <div>
          <AddFriendForm
            friendName={friendName}
            setFriendName={setFriendName}
            friendImage={friendImage}
            setFriendImage={setFriendImage}
            onSubmit = {handleAddFriend}
          />
          <Button
            number="2"
            newClass="addFriend"
            friend={friend}
            setFriend={setFriend}
          >
            Close
          </Button>
        </div>
      )}
    </div>
  );
}

function Friend({ friend }) {
  return (
    <div className="d-flex justify-content-between align-items-center m-4">
      <img
        src={`${friend.image}`}
        className="rounded-circle"
        style={{ width: "50px", height: "50px" }}
        alt="Avatar"
      />
      <div className="d-flex flex-column">
        <span>{friend.name}</span>
        <span className="green">Expense note</span>
      </div>
      <Button number="1">Select</Button>
    </div>
  );
}

function AddFriendForm({onSubmit, friendName, setFriendName, friendImage,  setFriendImage}) {
  return (
    <form className="formClass p-3 mt-4" onSubmit ={onSubmit}>
      <Form formClass="formClass1" value ={friendName} setOnChange ={setFriendName}>🤼‍♀️ Friend name</Form>
      <Form formClass="formClass1"value ={friendImage} setOnChange ={setFriendImage}>🏞️ Image URL</Form>
      <div className="addFr">
        <Button number="3">Add</Button>
      </div>
    </form>
  );
}

function Form({ value, setOnChange, formClass, children }) {
  return (
    <div className={`${formClass}  m-2`}>
      <label>{children}</label>
      <input type="text" value ={value} onChange = {(e)=> setOnChange(e.target.value)} />
    </div>
  );
}

function Button({ number, friend, setFriend, children, newClass }) {
  const buttonType = {
    type: "button",
    value: friend,
    onClick: () => setFriend(!friend),
  };
  if (number === "1") {
    buttonType.value = undefined;
    buttonType.onClick = undefined;
  } else if (number === "3") {
    buttonType.value = undefined;
    buttonType.onClick = undefined;
    buttonType.type = "submit";
  }
  return (
    <button {...buttonType} className={`${newClass} btn btn-sm btn-warning`}>
      {children}
    </button>
  );
}
export default App;
