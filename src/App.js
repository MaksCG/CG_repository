// ІМПОРТУЄМО БІБЛІОТЕКИ БЕЗ ЯКИХ НЕ МОЖЕМО ПИСАТИ КОД
import React from "react";
import styled from "styled-components";

import Page from "./component/Page";
import Header from "./component/Header";
import Balance from "./component/Balance";
import Menu from "./component/Menu";
import Payment from "./component/Payment";

// КОНФІГУРАЦІЯ ========================================

const START_BALANCE = 1000;
const LIMIT_BALANCE = 100000;
const GET_MONEY = 1000;
const GET_SALLARY = 10000;
const GET_FOOD = 100;

export default function App() {
  // ФУНКЦІОНАЛ БАЛАНСУ ========================

  // Ось тут тримаємо актуальне значення балансу

  const [balance, setBalance] = React.useState(START_BALANCE);

  // Функція для прямого поповнення балансу
  const getMoney = () => {
    setBalance(balance + GET_MONEY);

    setpeyment([
      {
        name: "Баланс поповнено",
        amount: GET_MONEY,
        type: "+"
      },
      ...payment
    ]);
  };
  const getSallary = () => {
    setBalance(balance + GET_SALLARY);

    setpeyment([
      {
        name: "Баланс поповнено",
        amount: GET_SALLARY,
        type: "+"
      },
      ...payment
    ]);
  };
  const getFood = () => {
    setBalance(balance - GET_FOOD);

    setpeyment([
      {
        name: "Баланс знято",
        amount: GET_FOOD,
        type: "-"
      },
      ...payment
    ]);
  };
  // Функція яка виконується кожен раз коли наш баланс змінився
  React.useEffect(() => {
    // Перевірка на ліміт балансу
    if (balance > LIMIT_BALANCE) {
      alert(`Ваш ліміт балансу: ${LIMIT_BALANCE}`);
      setBalance(START_BALANCE);
    }

    // Перевірка на мінусовий баланс
    if (balance < 0) {
      alert(`Ви використали усі свої гроші. Поповніть картку`);
      // setBalance(0);
    }
    // Сюди записуються змінні при оновленні яких буде виконуватися функція
  }, [balance]);

  const [payment, setpeyment] = React.useState([]);
  // ВЕРСТКА ІНТЕРФЕЙСУ ==========================================
  const LOGIN = "tura";
  const PASSWORD = "1234";

  const [isLogged, setLogget] = React.useState(false);

  const dologin = () => {
    const login = prompt("Ваш логін");
    const password = prompt("Ваш пароль");

    if (login === LOGIN && password === PASSWORD) {
      alert("Ви увійшли");
      setLogget(true);
    } else {
      if (login !== LOGIN && password !== PASSWORD) {
        return alert("помилка в логіні та паролі");
      }

      if (login !== LOGIN) {
        return alert("помилка в логіні");
      }

      if (password !== PASSWORD) {
        return alert("помилка в паролі");
      }
    }
  };

  return (
    <Page>
      {/* компонент шапки з нашою назвою
          також при кліку мишкою на шапку
          в нас визивається функція HelloWorld
      */}

      <Header name="Alex BANK" onClick={dologin} />

      {/* Компонент баланса в який передається
          Актуальне значення балансу  */}
      {isLogged && <Balance balance={balance} />}

      {/* Компонент меню з кнопками */}
      {isLogged && (
        <Menu
          // ось сюди ми передаємо конфігурацію кнопок
          config={[
            {
              name: "+ 1000 до балансу",
              onClick: getMoney,
              img: "/icon/fish.svg"
            },

            {
              name: "Зарплата",
              onClick: getSallary,
              img: "/icon/payment.svg"
            },

            {
              name: "Купити Їжу",
              onClick: getFood,
              img: "/icon/apple.svg"
            }
          ]}
        />
      )}
      {/* компонент списка наших транзакцій
          цей функціонал ми будемо робити на 3 уроці
      */}
      {isLogged && <Payment payment={payment} />}
      {isLogged === false && (
        <NotLogged>Вам потрібно увійти до акаунта</NotLogged>
      )}
    </Page>
  );
}

const NotLogged = styled.div`
  padding: 30px;
  background: #000;
  color: #fff;
  text-align: center;

  margin-top: 100px;

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
