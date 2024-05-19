const Pizza = (props) => {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.title} />
      <div>
        <h3>{props.title}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
};

export default Pizza;
