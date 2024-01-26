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
    <header className="header">
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
        <>
          <p>
            "Welcome to our pizza shop, where passion meets pizza perfection! We
            are a family-owned pizzeria dedicated to crafting mouthwatering
            pizzas that delight your taste buds. Our commitment to quality
            starts with the finest, freshest ingredients, handpicked to create a
            symphony of flavors in every slice.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>Oops! We are all sold out</p>
      )}
    </main>
  );
}
function Pizza({pizzaObject}) {
  return (
    <li className={`pizza ${pizzaObject.soldOut ? 'sold-out': ''}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "Sold Out" : pizzaObject.price}</span>
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
function Order({formattedTime}) {
  return (
    <div className="order">
      <p>{formattedTime} We are currently opening!</p>
      <button className="btn" type="button">
        Order
      </button>
    </div>
  );
}
export default App;
