import React, { useState } from "react";
import Paginator from "../../Components/Paginator/Paginator";
import s from "./OrderList.module.scss";
import { prepareImgLink } from "./../../helpers/imgPrepare";
import checkBox from "../../Images/checkBoxIcon.svg";
import dsblCheckBox from "../../Images/disabledCheckBox.svg";
import checkIcon from "../../Images/checkIcon.svg";
import reject from "../../Images/reject.svg";
import edit from "../../Images/edit.svg";
import moment from "moment";
import "moment/locale/ru";
import "moment-duration-format";
import { formatPrice } from "./../../helpers/formatPrice";
import { ReactSVG } from "react-svg";
import ServerError from "../ServerError/ServerError";
import Select from "../../Components/Select/Select";
import Response from "./../../Components/Response/Response";

require("moment-duration-format");

const OrderList = ({
  orderList,
  response,
  handlePageChange,
  cities,
  setFilterId,
  handlerApplyFilter,
  orderStatus,
  setFilterStatusId,
  handleOrderChange,
  isOrderChangeActive,
}) => {
  const pagesCount = Math.ceil(orderList.count / 3 - 1);
  return (
    <section className={isOrderChangeActive ? s.hide : null}>
      {response.length !== 0 ? (
        <ServerError {...{ response }} />
      ) : (
        <>
          <div className={s.pageTitle}>Заказы</div>
          <div className={s.ordersWrapper}>
            <div className={s.sortParamsWrapper}>
              <div className={s.sortParamsContainer}>
                <div className={s.selectWrapper}>
                  <Select
                    array={cities}
                    defaultText={"Город"}
                    setFilter={setFilterId}
                  />
                </div>
                <div className={s.selectWrapper}>
                  <Select
                    array={orderStatus}
                    defaultText={"Cтатус"}
                    setFilter={setFilterStatusId}
                  />
                </div>
              </div>

              <button onClick={() => handlerApplyFilter()}>Применить</button>
            </div>

            {orderList.data.length ? (
              orderList.data.map(
                ({
                  id,
                  cityId,
                  carId,
                  pointId,
                  color,
                  dateFrom,
                  dateTo,
                  price,
                  isFullTank,
                  isNeedChildChair,
                  isRightWheel,
                }) => {
                  return (
                    <div key={id} className={s.orderWrapper}>
                      <div className={s.orderImgWrapper}>
                        <img
                          src={
                            carId ? prepareImgLink(carId.thumbnail.path) : null
                          }
                        />
                      </div>

                      <div className={s.orderInfoWrapper}>
                        <div className={s.textLine}>
                          {carId && (
                            <span>
                              {carId.name.toUpperCase().replace(/[.,%]/g, "")}{" "}
                            </span>
                          )}
                          в {cityId && <span>{cityId.name}</span>},{" "}
                          {pointId && pointId.address}
                        </div>
                        <div className={s.textLine}>
                          {dateFrom &&
                            moment(dateFrom).format("DD.MM.YYYY hh:mm")}{" "}
                          —{" "}
                          {dateTo && moment(dateTo).format("DD.MM.YYYY hh:mm")}
                        </div>
                        <div className={s.textLine}>
                          Цвет:{" "}
                          {color && (
                            <span>
                              {color[0].toUpperCase() + color.slice(1)}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className={s.extraOrderInfoWrapper}>
                        <div className={s.extraOrderInfo}>
                          <div className={s.iconWrapper}>
                            {isFullTank ? (
                              <ReactSVG src={checkBox} />
                            ) : (
                              <ReactSVG src={dsblCheckBox} />
                            )}
                          </div>
                          <div
                            className={
                              isFullTank ? s.activeText : s.disabledText
                            }
                          >
                            Полный бак
                          </div>
                        </div>

                        <div className={s.extraOrderInfo}>
                          <div className={s.iconWrapper}>
                            {isNeedChildChair ? (
                              <ReactSVG src={checkBox} />
                            ) : (
                              <ReactSVG src={dsblCheckBox} />
                            )}
                          </div>
                          <div
                            className={
                              isNeedChildChair ? s.activeText : s.disabledText
                            }
                          >
                            Детское кресло
                          </div>
                        </div>

                        <div className={s.extraOrderInfo}>
                          <div className={s.iconWrapper}>
                            {isRightWheel ? (
                              <ReactSVG src={checkBox} />
                            ) : (
                              <ReactSVG src={dsblCheckBox} />
                            )}
                          </div>
                          <div
                            className={
                              isRightWheel ? s.activeText : s.disabledText
                            }
                          >
                            Правый руль
                          </div>
                        </div>
                      </div>

                      <div className={s.orderPrice}>
                        {price && formatPrice(price)} ₽
                      </div>

                      <div className={s.buttonsWrapper}>
                        <button>
                          <div className={s.btnIconWrapper}>
                            <ReactSVG src={checkIcon} />
                          </div>
                          <div>Готово</div>
                        </button>
                        <button>
                          <div className={s.btnIconWrapper}>
                            <ReactSVG src={reject} />
                          </div>
                          <div>Отмена</div>
                        </button>
                        <button>
                          <div className={s.btnIconWrapper}>
                            <ReactSVG src={edit} />
                          </div>
                          <div onClick={() => handleOrderChange(id)}>
                            Изменить
                          </div>
                        </button>
                      </div>
                    </div>
                  );
                }
              )
            ) : (
              <div className={s.noFilteredOrders}>
                Заказов с данными параметрами не найдено
              </div>
            )}

            <Paginator {...{ handlePageChange, pagesCount }} />
          </div>
        </>
      )}
    </section>
  );
};

export default OrderList;
