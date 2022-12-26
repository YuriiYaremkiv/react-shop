import { useState, useEffect } from "react";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BaskedList } from "./BaskedList";
import { Alert } from "./Alert";

const API_KEY = "a1109d12-878f2cba-14d8581f-96ed24f4";
const API_URL = "https://fortniteapi.io/v2/shop?lang=ru";

export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBaskedShow, setIsBaskedShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        throw new Error(error.message);
      });
  }, []);

  const addToBasked = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
      setAlertName(newItem.name);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
      setAlertName(newOrder.name);
    }
  };

  const removeFromBasked = (id) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const incQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const decQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const handleBaskedShow = () => {
    setIsBaskedShow(!isBaskedShow);
  };

  const closeAlert = () => {
    setAlertName("");
  };

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBaskedShow={handleBaskedShow} />
      {loading && <Preloader />}
      <GoodsList props={goods.slice(0, 12)} addToBasked={addToBasked} />
      {isBaskedShow ? (
        <BaskedList
          props={order}
          handleBaskedShow={handleBaskedShow}
          removeFromBasked={removeFromBasked}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      ) : null}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
};
