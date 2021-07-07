import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import "../App.css"

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
    <div className="tour">
      
      <p> {title}</p>
      <p> Супер-цена!</p>
      <p> {destination}</p>
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
      <p>Для бронирования пишите в личные сообщения или звоните.</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Tour);
