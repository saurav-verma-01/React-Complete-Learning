import Pizza from "./Pizza";

const Menu = () => {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        <Pizza
          title="Pizza Spinachi"
          ingredients="Tomato, mozarella, and pepperoni"
          photoName="./pizzas/spinaci.jpg"
          price="12"
        />
        <Pizza
          title="Pizza Funghi"
          ingredients="Tomato, mozarella, mushrooms, and onion"
          photoName="pizzas/funghi.jpg"
          price="14"
        />
      </div>
    </div>
  );
};

export default Menu;
