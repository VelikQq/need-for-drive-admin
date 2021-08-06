import React from "react";
import AddEntityButton from "../../Components/Entity/AddEntityBtn/AddEntityBtn";
import ChangeEntityButton from "../../Components/Entity/ChangeEntityBtn/ChangeEntityBtn";
import EntityWrapper from "../../Components/Entity/EntityWrapper/EntityWrapper";
import PageTitle from "../../Components/PageTitle/PageTitle";
import s from "./OrderStatus.module.scss";
import DeleteEntityButton from "./../../Components/Entity/DeleteEntityBtn/DeleteEntityBtn";
import Response from "./../../Components/Response/Response";
import ServerError from './../ServerError/ServerError';

const OrderStatus = ({
  orderStatus,
  isAddOrderStatusActive,
  handlerAddOrderStatus,
  handlerDeleteOrderStatus,
  handlerChangeOrderStatus,
  isChangeOrderStatusActive,
  response,
  closeOrderStatusResponse,
  errorResponse,
}) => {
  return (
    <section
      className={
        isAddOrderStatusActive || isChangeOrderStatusActive ? s.hide : null
      }
    >
      {response.length !== 0 && (
        <Response
          response={response}
          closeSuccessInfo={closeOrderStatusResponse}
        />
      )}
      {errorResponse.length !== 0 ? (
        <ServerError response={errorResponse} />
      ) : (
        <>
          <PageTitle title="Статусы заказов" />
          <EntityWrapper>
            <AddEntityButton handlerAddEntity={handlerAddOrderStatus} />
            <div className={s.orderStatusTableWrapper}>
              <table>
                <thead>
                  <tr>
                    <th>Название</th>
                    <th className={s.changeTableColumn}>Изменить</th>
                    <th className={s.deleteTableColumn}>Удалить</th>
                  </tr>
                </thead>
                <tbody>
                  {orderStatus.data.map(({ id, name }) => (
                    <tr key={id}>
                      <td>{name ? name : "No name"}</td>
                      <td className={s.changeTableColumn}>
                        <ChangeEntityButton
                          handlerChangeEntity={handlerChangeOrderStatus}
                          id={id}
                        />
                      </td>
                      <td className={s.deleteTableColumn}>
                        <DeleteEntityButton
                          handlerDeleteEntity={handlerDeleteOrderStatus}
                          id={id}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </EntityWrapper>
        </>
      )}
    </section>
  );
};

export default OrderStatus;
