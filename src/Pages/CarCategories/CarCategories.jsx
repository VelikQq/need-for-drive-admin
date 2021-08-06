import React from "react";
import AddEntityButton from "../../Components/Entity/AddEntityBtn/AddEntityBtn";
import ChangeEntityButton from "../../Components/Entity/ChangeEntityBtn/ChangeEntityBtn";
import EntityWrapper from "../../Components/Entity/EntityWrapper/EntityWrapper";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Paginator from "../../Components/Paginator/Paginator";
import s from "./CarCategory.module.scss";
import DeleteEntityButton from "./../../Components/Entity/DeleteEntityBtn/DeleteEntityBtn";
import Response from "./../../Components/Response/Response";
import ServerError from "./../ServerError/ServerError";

const CarCategories = ({
  carCategories,
  handlePageChange,
  handlerAddCarCategory,
  isAddCarCategory,
  handlerDeleteCarCategory,
  hanlderChangeCarCategory,
  isChangeCarCategotyActive,
  response,
  closeCarCategoryResponse,
  errorResponse,
}) => {
  return (
    <section
      className={isAddCarCategory || isChangeCarCategotyActive ? s.hide : null}
    >
      {response.length !== 0 && (
        <Response
          response={response}
          closeSuccessInfo={closeCarCategoryResponse}
        />
      )}
      {errorResponse.length !== 0 ? (
        <ServerError response={errorResponse} />
      ) : (
        <>
          <PageTitle title="Категории автомобилей" />
          <EntityWrapper>
            <AddEntityButton handlerAddEntity={handlerAddCarCategory} />
            <div className={s.carCategoryTableWrapper}>
              <table>
                <thead>
                  <tr>
                    <th>Название</th>
                    <th>Описание</th>
                    <th className={s.changeTableColumn}>Изменить</th>
                    <th className={s.deleteTableColumn}>Удалить</th>
                  </tr>
                </thead>
                <tbody>
                  {carCategories.data.map(({ id, name, description }) => (
                    <tr key={id}>
                      <td>{name ? name : "No Name"}</td>
                      <td>{description ? description : "No description"}</td>
                      <td className={s.changeTableColumn}>
                        <ChangeEntityButton
                          handlerChangeEntity={hanlderChangeCarCategory}
                          id={id}
                        />
                      </td>
                      <td className={s.deleteTableColumn}>
                        <DeleteEntityButton
                          handlerDeleteEntity={handlerDeleteCarCategory}
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

export default CarCategories;
