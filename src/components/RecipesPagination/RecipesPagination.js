import React, { useEffect, useState } from 'react';
import './RecipesPagination.scss';

import CardComponent from '../card/CardComponent';
import defaultImage from "../../assets/images/no-image.jpg";
import ReactPaginate from 'react-paginate';
import { useAsyncValue } from 'react-router-dom';

const RecipesPagination = () => {

  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 12;
  const recipes = useAsyncValue()?.results;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(recipes.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(recipes.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, recipes]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % recipes.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="recipe-cards">
        {currentItems.map(recipe => {
          return (
            <CardComponent
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image ? recipe.image : defaultImage}
            />
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination-container"
        pageLinkClassName="pagination-link"
        previousLinkClassName="pagination-link"
        nextLinkClassName="pagination-link"
        activeLinkClassName="pagination-active-link"
      />
    </>
  );
}

export default RecipesPagination;