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
  return (
    <div>
      {initialFriends.map((e, i) => (
        <Friend friend={e} key={i} />
      ))}
      <Button newClass="addFriend"> Add friend</Button>
      <AddFriendForm />
      <Button newClass="addFriend">Close</Button>
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
      <Button className =''>Select</Button>
    </div>
  );
}

function AddFriendForm() {
  return (
    <div className='formClass p-3 mt-4'>
      <Form formClass='formClass1'>🤼‍♀️ Friend name</Form>
      <Form formClass='formClass1'>🏞️ Image URL</Form>
      <div className ='addFr'>
        <Button>Add</Button>
      </div>
    </div>
  );
}

function Form({formClass, children}) {
  return (
    <div className={`${formClass}  m-2`}>
      <label>{children}</label>
      <input type="text" name="" id="" />
    </div>
  );
}

function Button({ children, newClass }) {
  return (
    <button type="button" className={`${newClass} btn btn-sm btn-warning`}>
      {children}
    </button>
  );
}
export default App;
