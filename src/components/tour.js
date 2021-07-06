import React from "react";
import { connect } from "react-redux";
import moment from "moment";

const dateFormat = (date) => {
  moment.locale("ru");
  return moment(date, "YYYY-MM-DD").format("DD.MM.YYYY");
};

function Tour({ tour }) {
  const {
    title,
    destination,
    city,
    start,
    end,
    price,
    hotel,
    food,
    tourists,
    rules,
    comments,
  } = tour;
  return (
    <div>
      <p> {title}</p>
      <p> Супер-цена!</p>
      <p>Направление: {destination}</p>
      <p>Город вылета: {city}</p>
      <p>
        Даты тура: {dateFormat(start)} - {dateFormat(end)}
      </p>
      <p>Отель: {hotel}</p>
      <p>Питание: {food}</p>
      <p>
        Стоимость: {price} {tourists}
      </p>
      <p>В стоимость включено: перелет, проживание, трансфер, мед. страховка</p>
      <p>Правила въезда: {rules}</p>
      <p>{comments}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Tour);
