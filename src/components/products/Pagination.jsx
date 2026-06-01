import "./Pagination.css";

const Pagination = ({ currPage, totalPages, changePage }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => changePage(currPage - 1)}
        disabled={currPage === 1}
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={currPage === index + 1 ? "active" : ""}
          onClick={() => changePage(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => changePage(currPage + 1)}
        disabled={currPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
