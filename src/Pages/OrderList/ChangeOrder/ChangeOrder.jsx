import React, { useEffect, useState } from "react";
import OrderChangeSelect from "../../../Components/OrderChangeSelect/OrderChangeSelect";
import style from "../../../Components/OrderChangeSelect/OrderChangeSelect.module.scss";
import s from "./ChangeOrder.module.scss";
import { Form } from "react-final-form";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import clean_input from "../../../Images/clean_input.svg";
import moment from "moment";
import "moment/locale/ru";
import "moment-duration-format";
import { ReactSVG } from "react-svg";
import CheckBox from "../../../Components/CheckBox/CheckBox";
import CheckBoxInput from "./../../../Components/CheckBoxInput/CheckBoxInput";
import { calcPrice } from "./../../../helpers/calcPrice";
import Response from "../../../Components/Response/Response";
require("moment-duration-format");

const ChangeOrder = ({
  order,
  cities,
  points,
  orderStatus,
  rates,
  handlerCancel,
  addParams,
  setCarParams,
  availParams,
  setAvailParams,
  updateOrder,
  orderResponse,
  closeResponse,
}) => {
  let filteredPoints = [];
  points.data.filter((point) => {
    const { cityId, adress, id } = point;
    if (cityId != null && cityId.id === order.data.cityId.id) {
      filteredPoints.push(point);
    }
  });

  const [startDate, setCurStartDate] = useState(order.data.dateFrom);
  const [endDate, setCurEndDate] = useState(order.data.dateTo);

  const handleStartDate = (date) => {
    setCurStartDate(date);
    setActive(true);
    setCurEndDate("");
  };

  const handleEndDate = (date) => {
    setCurEndDate(date);
  };

  const handleStartDateCleanBtn = () => {
    setCurStartDate("");
    setCurEndDate("");
  };

  const handleEndDateCleanBtn = () => {
    setCurEndDate("");
  };

  const [isCalenadarActive, setActive] = useState(true);
  const [diffDate, setDiffDate] = useState(
    moment.duration(moment(endDate).diff(moment(startDate)))
  );

  useEffect(() => {
    if (startDate || startDate !== "") setActive(false);
  }, [startDate]);

  useEffect(() => {
    if (startDate && endDate) {
      const diff = moment.duration(moment(endDate).diff(moment(startDate)));
      setDiffDate(diff);
    }
  }, [startDate, endDate]);

  const [curCity, setCurCity] = useState();
  const handlerPutCity = (value) => {
    setCurCity(value);
  };

  const [curPoint, setCurPoint] = useState();
  const handlerPutPoint = (value) => {
    setCurPoint(value);
  };

  const [curStatus, setCurStatus] = useState();
  const handlerPutStatus = (value) => {
    setCurStatus(value);
  };

  const [curRate, setCurRate] = useState();
  const [curRateName, setCurRateName] = useState();
  const handlerPutRate = (value, name) => {
    setCurRate(value);
    rates.data.forEach(({ rateTypeId }) => {
      if (rateTypeId.id === value) {
        setCurRateName(rateTypeId.name);
      }
    });
  };
  useEffect(() => {
    if (order) {
      if (order.data.cityId) {
        setCurCity(order.data.cityId.id);
      }
      if (order.data.pointId) {
        setCurPoint(order.data.pointId.id);
      }
      if (order.data.orderStatusId) {
        setCurStatus(order.data.orderStatusId.id);
      }
    }
  }, [order]);

  useEffect(() => {
    if (order) {
      if (order.data.isFullTank) {
        setCarParams(12);
      }
      if (order.data.isNeedChildChair) {
        setCarParams(23);
      }
      if (order.data.isRightWheel) {
        setCarParams(33);
      }
      setAvailParams(true);
    }
  }, [order]);

  const [isChecked, setCheck] = useState("");
  const handleParamsChange = (e, id) => {
    setCheck(e.target.value);
    setCarParams(parseInt(id));
  };

  const [price, setPrice] = useState(order.data.price);
  useEffect(() => {
    if(order.data.carId) {
       if (curRateName && diffDate && order.data.carId.priceMin && addParams)
      setPrice(
        calcPrice(curRateName, diffDate, order.data.carId.priceMin, addParams)
      );
    } else {
      setPrice("Невозможно расчитать цену без минимальной стоимости автомобиля");
    }
   
  }, [curRateName, diffDate, addParams]);

  const onSubmit = () => {
    if (curStatus && curPoint && startDate && endDate && curRate) {
      const isFullTank = addParams[0].checked;
      const isNeedChildChair = addParams[1].checked;
      const isRigthWheel = addParams[2].checked;

      const res = {
        orderStatusId: {
          name: "new",
          id: curStatus,
        },
        cityId: curCity.toString(),
        pointId: curPoint.toString(),
        carId: order.data.carId.id.toString(),
        color: order.data.color.toString(),
        dateFrom: moment.duration(startDate)._milliseconds,
        dateTo: moment.duration(endDate)._milliseconds,
        rateId: curRate.toString(),
        price: parseFloat(price.replace(/\s/g, "")),
        isFullTank: Boolean(isFullTank),
        isNeedChildChair: Boolean(isNeedChildChair),
        isRightWheel: Boolean(isRigthWheel),
      };

      updateOrder(order.data.id, res);
    } else {
      alert("Заполните все поля!");
    }
  };

  return (
    <div className={s.changeOrderWrapper}>
      {orderResponse.length !== 0 && (
        <Response response={orderResponse} closeSuccessInfo={closeResponse} />
      )}
      <div className={s.pageTitle}>Заказ {order.data.id}</div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className={s.orderInfoInputs}>
              <OrderChangeSelect
                array={cities.data}
                value={curCity}
                label="Город"
                selectValue={order.data.cityId}
                handlerPutSelect={handlerPutCity}
              />

              <OrderChangeSelect
                array={filteredPoints}
                value={curPoint}
                label="Пункт выдачи"
                selectValue={order.data.pointId}
                handlerPutSelect={handlerPutPoint}
              />

              <OrderChangeSelect
                array={orderStatus.data}
                label="Статус"
                value={curStatus}
                selectValue={order.data.orderStatusId}
                handlerPutSelect={handlerPutStatus}
              />

              <div className={style.selectWrapper}>
                <label>Тариф</label>
                <select
                  onChange={(e) => handlerPutRate(e.target.value)}
                  value={curRate}
                >
                  <option />
                  {rates.data.map(({ rateTypeId }) => {
                    if (order.data.rateId) {
                      return (
                        <option
                          key={rateTypeId.id}
                          value={rateTypeId.id}
                          selected={
                            rateTypeId.id === order.data.rateId.rateTypeId.id
                          }
                        >
                          {rateTypeId.name}
                        </option>
                      );
                    } else {
                      return (
                        <option key={rateTypeId.id} value={rateTypeId.id}>
                          {rateTypeId.name}
                        </option>
                      );
                    }
                  })}
                </select>
              </div>

              <div className={style.selectWrapper}>
                <label>Начало аренды</label>
                <div className={s.dataInputField}>
                  <DatePicker
                    locale="ru"
                    clearButtonClassName={s.cleanInputBtn}
                    selected={startDate}
                    minDate={new Date()}
                    onChange={(date) => handleStartDate(date)}
                    showTimeSelect
                    dateFormat="dd.MM.yyyy HH:mm"
                  />
                  <div
                    className={s.cleanInputBtn}
                    onClick={handleStartDateCleanBtn}
                  >
                    <ReactSVG src={clean_input} />
                  </div>
                </div>
              </div>

              <div className={style.selectWrapper}>
                <label>Конец аренды</label>
                <div className={s.dataInputField}>
                  <DatePicker
                    locale="ru"
                    selected={endDate}
                    minDate={startDate}
                    // filterTime={filterPassedTime}
                    disabled={isCalenadarActive}
                    onChange={(date) => handleEndDate(date)}
                    showTimeSelect
                    dateFormat="dd.MM.yyyy HH:mm "
                  />
                  <div
                    className={s.cleanInputBtn}
                    onClick={handleEndDateCleanBtn}
                  >
                    <ReactSVG src={clean_input} />
                  </div>
                </div>
              </div>
            </div>

            <div className={` ${style.selectWrapper} ${s.addParams}`}>
              {availParams &&
                addParams.map(({ id, name, price, checked }) => {
                  return (
                    <CheckBoxInput
                      key={id}
                      id={id}
                      checked={checked}
                      inputName={name}
                      price={price}
                      handleChange={handleParamsChange}
                      currentInputType={isChecked}
                    />
                  );
                })}
            </div>

            <div className={s.orderPrice}>Цена заказа: {price}</div>

            <div className={s.changeOrderBtnsWrapper}>
              <button className={s.changeOrderBtn} type="submit">
                Изменить
              </button>
              <button className={s.cancellOrderBtn} onClick={handlerCancel}>
                Отменить
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default ChangeOrder;
