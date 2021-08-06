import React from "react";
import AddEntityButton from "../../Components/Entity/AddEntityBtn/AddEntityBtn";
import ChangeEntityButton from "../../Components/Entity/ChangeEntityBtn/ChangeEntityBtn";
import EntityWrapper from "../../Components/Entity/EntityWrapper/EntityWrapper";
import PageTitle from "../../Components/PageTitle/PageTitle";
import s from "./RateType.module.scss";
import DeleteEntityButton from "./../../Components/Entity/DeleteEntityBtn/DeleteEntityBtn";
import Response from "./../../Components/Response/Response";
import ServerError from "./../ServerError/ServerError";

const RateType = ({
  rateType,
  handlePageChange,
  isAddRatyTypeActive,
  handlerAddRateType,
  handlerDeleteRateType,
  handlerChangeRateType,
  isChangeRateTypeActive,
  response,
  closeRateTypeResponse,
  errorResponse,
}) => {
  return (
    <section
      className={isAddRatyTypeActive || isChangeRateTypeActive ? s.hide : null}
    >
      {response.length !== 0 && (
        <Response
          response={response}
          closeSuccessInfo={closeRateTypeResponse}
        />
      )}
      {errorResponse.length !== 0 ? (
        <ServerError response={errorResponse} />
      ) : (
        <>
          <PageTitle title="Типы тарифов" />
          <EntityWrapper>
            <AddEntityButton handlerAddEntity={handlerAddRateType} />
            <div className={s.rateTypeTableWrapper}>
              <table>
                <thead>
                  <tr>
                    <th>Название</th>
                    <th>Ед. измерения</th>
                    <th className={s.changeTableColumn}>Изменить</th>
                    <th className={s.deleteTableColumn}>Удалить</th>
                  </tr>
                </thead>
                <tbody>
                  {rateType.data.map(({ id, unit, name }) => (
                    <tr key={id}>
                      <td>{name ? name : "No Name"}</td>
                      <td>{unit ? unit : "No unit"}</td>
                      <td className={s.deleteTableColumn}>
                        <ChangeEntityButton
                          handlerChangeEntity={handlerChangeRateType}
                          id={id}
                        />
                      </td>
                      <td className={s.deleteTableColumn}>
                        <DeleteEntityButton
                          handlerDeleteEntity={handlerDeleteRateType}
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

export default RateType;
