import React from "react";
import AddEntityButton from "../../Components/Entity/AddEntityBtn/AddEntityBtn";
import ChangeEntityButton from "../../Components/Entity/ChangeEntityBtn/ChangeEntityBtn";
import EntityWrapper from "../../Components/Entity/EntityWrapper/EntityWrapper";
import PageTitle from "../../Components/PageTitle/PageTitle";
import s from "./Points.module.scss";
import DeleteEntityButton from "./../../Components/Entity/DeleteEntityBtn/DeleteEntityBtn";
import Response from "./../../Components/Response/Response";
import ServerError from "../ServerError/ServerError";

const Points = ({
  points,
  handlerAddPoint,
  isAddPointActive,
  handlerDeletePoint,
  handlerChangePoint,
  isChangePointActive,
  response,
  closePointResponse,
  errorResponse,
}) => {
  return (
    <section
      className={isAddPointActive || isChangePointActive ? s.hide : null}
    >
      {response.length !== 0 && (
        <Response response={response} closeSuccessInfo={closePointResponse} />
      )}

      {errorResponse.length !== 0 ? (
        <ServerError response={errorResponse} />
      ) : (
        <>
          <PageTitle title="Места выдачи" />
          <EntityWrapper>
            <AddEntityButton handlerAddEntity={handlerAddPoint} />
            <div className={s.pointsTableWrapper}>
              {" "}
              <table>
                <thead>
                  <tr>
                    <th>Название</th>
                    <th>Адрес</th>
                    <th>Город</th>
                    <th className={s.changeTableColumn}>Изменить</th>
                    <th className={s.deleteTableColumn}>Удалить</th>
                  </tr>
                </thead>
                <tbody>
                  {points.data.map(({ id, name, address, cityId }) => (
                    <tr key={id}>
                      <td>{name ? name : "No Name"}</td>
                      <td>{address ? address : "No address"}</td>
                      <td>
                        {cityId && cityId.length !== 0 && cityId.name
                          ? cityId.name
                          : "No City"}
                      </td>
                      <td className={s.changeTableColumn}>
                        <ChangeEntityButton
                          handlerChangeEntity={handlerChangePoint}
                          id={id}
                        />
                      </td>
                      <td className={s.deleteTableColumn}>
                        <DeleteEntityButton
                          handlerDeleteEntity={handlerDeletePoint}
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

export default Points;
