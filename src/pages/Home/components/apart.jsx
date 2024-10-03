const Apart = (props) => {
  const { id, description, picture, price } = props;
  return (
    <a href={`/apartment/${id}`} id={`Apart ${id}`}>
      <div className="image">
        <img src={picture} alt={`Apart ${id}`} />
      </div>
      <div className="content">
        <span className="price">
          {price}Ariary<span>/ month</span>
        </span>
        <h3>Apart {id}</h3>
        <p>{description}</p>
        <a href="#">Book Now</a>
      </div>
    </a>
  );
};

export default Apart;
