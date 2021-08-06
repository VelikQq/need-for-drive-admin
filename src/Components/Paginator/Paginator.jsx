import React from "react";
import ReactPaginate from "react-paginate";
import s from './Paginator.module.scss';

const Paginator = ({ pagesCount, handlePageChange }) => {
  return (
    <div className={s.paginatorWrapper}>
      <ReactPaginate
        previousLabel={"«"}
        nextLabel={"»"}
        breakLabel={"..."}
        pageCount={pagesCount}
        onPageChange={handlePageChange}
        containerClassName={s.pagination}
        marginPagesDisplayed={5}
        pageRangeDisplayed={5}
        activeClassName={s.active}
        breakClassName={"break-me"}
      />
    </div>
  );
};

export default Paginator;
