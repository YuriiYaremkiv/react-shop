import { useEffect, useContext } from "react";
import { ShopContext } from "./context";

import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BaskedList } from "./BaskedList";
import { Alert } from "./Alert";

const API_KEY = "a1109d12-878f2cba-14d8581f-96ed24f4";
const API_URL = "https://fortniteapi.io/v2/shop?lang=ru";

export const Shop = () => {
  const { loading, setGoods, isBaskedShow, alertName } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
    //eslint-disable-next-line
  }, []);

  return (
    <main className="container content">
      <Cart />
      {loading && <Preloader />}
      <GoodsList />
      {isBaskedShow ? <BaskedList /> : null}
      {alertName && <Alert />}
    </main>
  );
};
