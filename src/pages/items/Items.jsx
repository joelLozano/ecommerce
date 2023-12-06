import { useEffect, useState } from "react";
import { getItems } from "../../services/itemServices";
import "./Items.scss";

export default function Items() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getItems();
        console.log(response.data);
        setItems(response.data);
        setLoading(false);
      } catch (error) {
        console.log("el error se producjo por ", error);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <h1>Loaging...</h1>;
  } else {
    return (
    <section className="items-container">
      <div className="items">
        {items.map((item) => (
          <div key={item.id} className="item">
            <img src={item.image} />
            <h3>{item.product_name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
    )
  }
}
