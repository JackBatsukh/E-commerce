import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Layout from "../../../shared/components/layout";
import { Link } from "react-router";

const SearchProduct = () => {
  const { keyword } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (keyword) {
      fetch(`https://dummyjson.com/products/search?q=${keyword}`)
        .then((res) => res.json())
        .then((data) => setSearchResults(data.products || []));
    }
  }, [keyword]);

  return (
    <Layout>
      <div className="search-results w-full h-fit flex flex-wrap p-8 gap-8 items-center justify-center bg-[#f6f6f6]">
        {searchResults.length > 0 ? (
          searchResults.map((product) => (
            <div
              key={product.id}
              className="product-card flex flex-col border w-[363px] gap-8 p-4 flex-wrap items-center justify-start"
            >
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <span className="font-semibold text-xl">{product.price}$</span>
              <p>{product.description}</p>
            </div>
          ))
        ) : (
          <div className="flex flex-col  items-center justify-center  p-12 gap-[40vh]">
            <h1 className="text-center">Таны хайсан бараа олдсонгүй! </h1>
            <Link to="/">
              <button className="btn glass btn-outline btn-info">
                Нүүр хуудасруу буцах
              </button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchProduct;