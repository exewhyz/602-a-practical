export default function ProductItem(props) {
  return (
    <div className="product-item">
      <h3>{props.name}</h3>
      <p>Price: {props.price}</p>
      <p>Status: {props.inStock ? "Available" : "Not Available"}</p>
    </div>
  );
}
