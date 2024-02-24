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
  const[selectedFriend, setSelectedFriend] = useState(null)
  const [condition, setCondition] = useState(false);

  function handleShowSplitBill(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id? null: friend))
    setCondition(false);
  }
  return (
    <div className="row">
      <FriendList setSelectedFriend={handleShowSplitBill} selectedFriend={selectedFriend} condition={condition} setCondition={setCondition}/>
      {selectedFriend && <SplitBill friendClick={selectedFriend}/>}
    </div>
  );
}

function FriendList({setSelectedFriend, selectedFriend, condition, setCondition}) {
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
        <Friend
          friend={e}
          key={e.i}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
        />
      ))}

      {condition && (
        <div>
          <AddFriendForm
            friendName={friendName}
            setFriendName={setFriendName}
            friendImage={friendImage}
            setFriendImage={setFriendImage}
            onSubmit={handleAddFriend}
          />
        </div>
      )}
      <Button
        number="2"
        newClass="addFriend"
        condition={condition}
        setCondition={setCondition}
      >
        {condition?'Close':'Add friend'}
      </Button>
    </div>
  );
}
function SplitBill({friendClick}) {
  const [billValue, setBillValue] = useState('')
  const [whoIsPaying, setWhoIsPaying] = useState('You')
  const [yourExpense, setYourExpense] = useState('')
  const yourFriendExpense = billValue?billValue-yourExpense:''

  return (
    <div className="formClass ml-5">
      <h3>SPLIT A BILL WITH {friendClick.name}</h3>
      <form>
        <Form type="number" formClass="formClass1" value={billValue} setOnChange={setBillValue}>
          💵 Bill value
        </Form>
        <Form type="number" formClass="formClass1" value={yourExpense} setOnChange={setYourExpense}>
          💵 Your expense
        </Form>
        <Form type="number" friendExpense={true} formClass="formClass1" value={yourFriendExpense}>
          💵 {friendClick.name}'s expense
        </Form>
        <Form type="option" formClass="formClass1" friendClick={friendClick} value={whoIsPaying} setOnChange={setWhoIsPaying}>
          💵 Who is paying the bill?
        </Form>
        <Button number="3" newClass="addFriend">
          Spilt Bill
        </Button>
      </form>
    </div>
  );
}
function Friend({ friend, setSelectedFriend, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <div className="d-flex justify-content-between align-items-center m-4">
      <img
        src={`${friend.image}`}
        className="rounded-circle"
        style={{ width: "50px", height: "50px" }}
        alt="Avatar"
      />
      <div className="d-flex flex-column">
        <h6>{friend.name}</h6>
        {friend.balance < 0 && (<p className="red">You owe {friend.name} {Math.abs(friend.balance)}</p>)}
        {friend.balance > 0 && (<p className="green">Your friend owe {friend.name} {Math.abs(friend.balance)}</p>)}
        {friend.balance === 0 && (<p>You owe {friend.name} {Math.abs(friend.balance)}</p>)}
      </div>
      <Button onClick = {()=>setSelectedFriend(friend)} condition={selectedFriend} number="1">{isSelected?'Close':'Select'}</Button>
    </div>
  );
}

function AddFriendForm({onSubmit, friendName, setFriendName, friendImage,  setFriendImage}) {
  return (
    <form className="formClass p-3 mt-4" onSubmit ={onSubmit}>
      <Form type ='text'formClass="formClass1" value ={friendName} setOnChange ={setFriendName}>🤼‍♀️ Friend name</Form>
      <Form type ='text' formClass="formClass1"value ={friendImage} setOnChange ={setFriendImage}>🏞️ Image URL</Form>
      <div className="addFr">
        <Button number="3">Add</Button>
      </div>
    </form>
  );
}

function Form({ type, value, setOnChange,friendExpense, formClass, children, friendClick }) {
  return (
    <form className={`${formClass}  m-2`}>
      <label>{children}</label>
      {type === "option" ? (
        <>
          <select value={value} onChange={(e) => setOnChange(+e.target.value)}>
            <option value="You">You</option>
            <option value={friendClick.name}>{friendClick.name}</option>
          </select>
        </>
      ) : (
        <>
          <input
            type={type}
            value={value}
            onChange={(e) => setOnChange(e.target.value)}
            disabled={friendExpense}
          />
        </>
      )}
    </form>
  );
}

function Button({ number,onClick, condition, setCondition, children, newClass }) {
  const buttonType = {
    type: "button",
    value: condition,
    onClick: () => setCondition(!condition),
  };
  if (number==='1') {
    buttonType.onClick = onClick;
  }
if (number === "3") {
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
