const HeroesListItem = ({ name, description, element, onDelete }) => {
  let elementClassName;

  switch (element) {
    case "fire":
      elementClassName = "bg-danger bg-gradient";
      break;
    case "water":
      elementClassName = "bg-primary bg-gradient";
      break;
    case "wind":
      elementClassName = "bg-secondary bg-gradient";
      break;
    case "earth":
      elementClassName = "bg-success bg-gradient";
      break;
    default:
      elementClassName = "bg-warning bg-gradient";
  }

  return (
    <li
      className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}
    >
      <img
        src="https://sun1-30.userapi.com/s/v1/if1/_3u-WHk_7-ptzn1FJ6YY-a0IiKpC7-IczQVEKxCq8n2853yExkxz1SGwuK68R8yiY-jnIrpe.jpg?size=200x200&quality=96&crop=72,13,200,200&ava=1"
        className="img-fluid w-25 d-inline"
        alt="unknown hero"
        style={{ objectFit: "cover" }}
      />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{description}</p>
      </div>
      <span
        onClick={onDelete}
        className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light"
      >
        <button
          type="button"
          className="btn-close btn-close"
          aria-label="Close"
        ></button>
      </span>
    </li>
  );
};

export default HeroesListItem;
