import React, { useState } from "react";
import { connect } from "react-redux";
import createTour from "../redux/actions";
import "../App.css";

function FormTour({ tour, createTour }) {
  const destination = [
    {
      data: [
        "Турция",
        "Анталийское побережье",
        "Эгейское побережье",
        "Стамбул",
        "Белек",
        "Анталия",
        "Кемер",
        "Бодрум",
        "Даламан",
        "Кушадасы",
        "Фетхие",
        "Олюдениз",
        "Мармарис",
      ],
      label: "Турция",
    },

    {
      data: ["Кипр", "Протарас", "Айя-напа", "Пафос", "Ларнака", "Лимассол"],
      label: "Кипр",
    },
    {
      data: ["Египет", "Хугада", "Шарм-эль-Шейх"],
      label: "Египет",
    },
    {
      label: "Россия",
      data: ["Сочи", "Крым", "Анапа", "Калининград", "Геленджик"],
    },
    {
      label: "Другие направления",
      data: ["Куба", "Мексика", "Албания", "Тунис"],
    },
  ];
  const city = ["Тюмень", "Москва", "Екатеринбург"];
  const food = [
    "завтраки",
    "без питания",
    "все включено",
    "завтрак-ужин",
    "завтрак-обед-ужин",
  ];

  const rules = [
    "отрицательный тест ПЦР для туристов от 12 лет или сертификат вакцинации((14 дней с последней дозы)",
    "отрицательный тест ПЦР для туристов от 6 лет или сертификат вакцинации(14 дней с последней дозы)",
    "отрицательный тест ПЦР для туристов любого возраста или сертификат вакцинации(14 дней с последней дозы)",
    "тест или вакцина для въезда не требуется",
    "отрицательный тест или сертификат вакцинации",
  ];

  const tourists = [
    "руб/чел.",
    "на семью 2+2 реб",
    "на семью 2+1 реб",
    "на двоих",
  ];

  const [newTour, setNewTour] = useState({
    title: null,
    destination: destination[0].data[0],
    city: city[0],
    start: new Date(),
    end: new Date(),
    hotel: null,
    price: null,
    food: food[0],
    tourists: tourists[0],
    rules: rules[0],
    comments: null,
  });

  const changeHandler = (e) => {
    setNewTour({ ...newTour, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className="form">
        <label htmlFor="title">Заголовок</label>
        <input type="text" id="title" name="title" onChange={changeHandler} />
        <label htmlFor="destination">Направление</label>
        <select id="destination" name="destination" onChange={changeHandler}>
          {destination.map((country) => {
            return (
              <optgroup key={`country ${country.label}`} label={country.label}>
                {country.data.sort().map((el) => (
                  <option key={el}>{el}</option>
                ))}
              </optgroup>
            );
          })}
        </select>

        <label htmlFor="city">Город вылета</label>
        <select name="city" id="city" onChange={changeHandler}>
          {city.map((el) => (
            <option key={el}>{el}</option>
          ))}
        </select>

        <label htmlFor="start">Даты тура</label>
        <input onChange={changeHandler} id="start" type="date" name="start" />
        <input type="date" name="end" id="end" onChange={changeHandler} />
        <label htmlFor="hotel">Отель</label>
        <input type="text" id="hotel" name="hotel" onChange={changeHandler} />
        <label htmlFor="food">Питание</label>
        <select name="food" id="food" onChange={changeHandler}>
          {food.map((el) => (
            <option key={el}>{el}</option>
          ))}
        </select>

        <label htmlFor="price">Стоимость</label>
        <input type="text" name="price" id="price" onChange={changeHandler} />
        <select name="tourists" id="tourists" onChange={changeHandler}>
          {tourists.map((el) => (
            <option key={el}>{el}</option>
          ))}
        </select>
        <label htmlFor="rules">Для въезда</label>
        <select id="rules" name="rules" onChange={changeHandler}>
          {rules.map((el) => (
            <option key={el}>{el}</option>
          ))}
        </select>

        <label htmlFor="comments">Комментарии</label>
        <input
          type="text"
          id="comments"
          name="comments"
          onChange={changeHandler}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            createTour(newTour);
          }}
        >
          Сформировать
        </button>
      </form>
      <p></p>
    </div>
  );
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { createTour })(FormTour);
