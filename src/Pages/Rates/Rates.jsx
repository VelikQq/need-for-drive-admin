import React from "react";
import AddEntityButton from "../../Components/Entity/AddEntityBtn/AddEntityBtn";
import ChangeEntityButton from "../../Components/Entity/ChangeEntityBtn/ChangeEntityBtn";
import EntityWrapper from "../../Components/Entity/EntityWrapper/EntityWrapper";
import PageTitle from "../../Components/PageTitle/PageTitle";
import DeleteEntityButton from "./../../Components/Entity/DeleteEntityBtn/DeleteEntityBtn";
import s from "./Rates.module.scss";
import Response from "./../../Components/Response/Response";
import ServerError from "../ServerError/ServerError";

const Rates = ({
  rates,
  handlePageChange,
  handlerDeleteRate,
  handlerAddRate,
  isAddRateActive,
  handlerChangeRate,
  isChangeRateActive,
  response,
  closeRateResponse,
  errorResponse,
}) => {
  return (
    <section className={isAddRateActive || isChangeRateActive ? s.hide : null}>
      {response.length !== 0 && (
        <Response response={response} closeSuccessInfo={closeRateResponse} />
      )}
      {errorResponse.length !== 0 ? (
        <ServerError response={errorResponse} />
      ) : (
        <>
          <PageTitle title="Тарифы" />
          <EntityWrapper>
            <AddEntityButton handlerAddEntity={handlerAddRate} />
            <div className={s.ratesTableWrapper}>
              <table>
                <thead>
                  <tr>
                    <th>Название</th>
                    <th>Цена</th>
                    <th className={s.changeTableColumn}>Изменить</th>
                    <th className={s.deleteTableColumn}>Удалить</th>
                  </tr>
                </thead>
                <tbody>
                  {rates.data.map(({ id, rateTypeId, price }) => (
                    <tr key={id}>
                      <td>
                        {rateTypeId &&
                        rateTypeId.length !== 0 &&
                        rateTypeId.name
                          ? rateTypeId.name
                          : "No Name"}
                      </td>
                      <td>{price ? price : "No price"}</td>
                      <td className={s.changeTableColumn}>
                        <ChangeEntityButton
                          handlerChangeEntity={handlerChangeRate}
                          id={id}
                        />
                      </td>
                      <td className={s.deleteTableColumn}>
                        <DeleteEntityButton
                          handlerDeleteEntity={handlerDeleteRate}
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

export default Rates;
