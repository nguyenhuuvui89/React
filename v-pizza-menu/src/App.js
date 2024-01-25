import logo from "./logo.svg";
import "./App.css";
import pizzaData from "./data.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header footer">
      <h1> Pizza Shop Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzaAvailable = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaAvailable > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObject={pizza} key={pizza} />
          ))}
        </ul>
      ) : (
        <p>Oops! We are all sold out</p>
      )}
    </main>
  );
}
function Pizza(props) {
  if (props.pizzaObject.soldOut) return null;
  return (
    <li className="pizza">
      <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name} />
      <div>
        <h3>{props.pizzaObject.name}</h3>
        <p>{props.pizzaObject.ingredients}</p>
        <span>{props.pizzaObject.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleTimeString();
  const getHour = currentTime.getHours();
  const startTime = 10;
  const closedTime = 22;
  const openTime = getHour > startTime && getHour < closedTime;
  return (
    <footer className="footer">
      {openTime ? (
        <Order formattedTime = {formattedTime}/>
      ) : (
        <p>'We are closed (Working Hours 10am to 10pm.)'</p>
      )}
    </footer>
  );
}
function Order(props) {
  return (
    <div className="order">
      <p>{props.formattedTime} We are currently opening!</p>
      <button className="btn" type="button">
        Order
      </button>
    </div>
  );
}
export default App;
