import { objPizzas } from "../pizzasInfo";

const pizzaCards = objPizzas.map(({ nombre, descripcion, image }) => (
  <div key={nombre} className="pizza-info">
    <img src={image} alt={nombre} />
    <h3>{nombre}</h3>
    <p>{descripcion}</p>
  </div>
));

function Menu() {
  return (
    <>
      <div className="main-menu-content">
        <section>
          <div className="menu_image_background">
            <h1>Menú</h1>
          </div>
        </section>
        <section className="section-pizzas">
          <h2>Pizzas</h2>
          <div className="container-pizzas">{pizzaCards}</div>
        </section>
      </div>
    </>
  );
}

export default Menu;
