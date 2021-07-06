import React, { useState } from "react";
import { connect } from "react-redux";
import createTour from "../redux/actions";

function FormTour({ tour, createTour }) {
  const [newTour, setNewTour] = useState({
    destination: null,
    city: null,
    start: new Date(),
    end: new Date(),
    hotel: null,
    price: null,
    food: null,
    tourists: null,
    rules: null,
  });

  console.log(newTour);
  const changeHandler = (e) => {
    setNewTour({ ...newTour, [e.target.name]: e.target.value });
  };

  console.log(tour);

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
  ];

  return (
    <div>
      <form>
        <label htmlFor="title">Заголовок</label>
        <input type="text" name="title" onChange={changeHandler} /> <br />
        <label htmlFor="destination">Направление</label>
        <select name="destination" onChange={changeHandler}>
          {destination.map((country) => {
            return (
              <optgroup label={country.label}>
                {country.data.sort().map((el) => (
                  <option>{el}</option>
                ))}
              </optgroup>
            );
          })}
        </select>
        <br />
        <label htmlFor="country">Город вылета</label>
        <select name="city" onChange={changeHandler}>
          {city.map((el) => (
            <option>{el}</option>
          ))}
        </select>
        <br />
        <label htmlFor="start">Начало тура</label>
        <input onChange={changeHandler} type="date" name="start" />
        <br />
        <label htmlFor="end">Конец тура</label>
        <input type="date" name="end" onChange={changeHandler} />
        <br />
        <label htmlFor="start">Отель</label>
        <input type="text" name="hotel" onChange={changeHandler} /> <br />
        <label htmlFor="food">Питание</label>
        <select name="food" onChange={changeHandler}>
          {food.map((el) => (
            <option>{el}</option>
          ))}
        </select>
        <br />
        <label htmlFor="price">Стоимость</label>
        <input type="text" name="price" onChange={changeHandler} />
        <select name="tourists" onChange={changeHandler}>
          {["руб/чел.", "на семью 2+2 реб", "на семью 2+1 реб"].map((el) => (
            <option>{el}</option>
          ))}
        </select>
        <br />
        <label htmlFor="rules">Для въезда</label>
        <select name="rules" onChange={changeHandler}>
          {rules.map((el) => (
            <option>{el}</option>
          ))}
        </select>
        <br />
        <label htmlFor="comments">Комментарии</label>
        <input type="text" name="comments" onChange={changeHandler} /> <br />
        <br />
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
