import "./Card.css";

const Card = (props) => {
  //   console.log("props=======", props.className);
  return <div className={`card ${props.className}`}>{props.children}</div>;
};

export default Card;
