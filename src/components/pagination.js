import React from "react";

const Pagination = (props) => {
  console.log(props);

  const { onLeftClick, onRightClick, page, totalPages } = props;
  return (
    <div className="pagination">
      <button onClick={onLeftClick}>
        <div>Previous</div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick}>
        <div>Next</div>
      </button>
    </div>
  );
};

export default Pagination;
