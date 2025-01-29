import React from "react";
import ProducrtAddCard from "../componets/addProduct/producrtAddCard";
import ProductCard from "../../home/components/ProductCard";
import Layout from "../componets/layout";
import { useProducts } from "../../../ProductProvider";

const AddProduct = () => {
  const { products, setProducts } = useProducts();

  const addProduct = (newProduct) => {
    if (
      newProduct &&
      newProduct.id &&
      newProduct.images &&
      newProduct.title &&
      newProduct.price &&
      newProduct.description
    ) {
      const productWithId = {
        ...newProduct,
        id: Math.random().toString(36).substr(2, 9),
      };
      const updatedProducts = [...products, productWithId];
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    } else {
      console.error("Талбарыг бүгдийг бөглөнө үү!", newProduct);
    }
  };

  return (
    <Layout>
      <div className="p-[30px] my-36 flex flex-col justify-center items-start w-full gap-8 lg:my-6 lg:px-52 lg:h-fit lg:right-1 lg:absolute lg:w-5/6">
        <div className="flex gap-4 items-end">
          <h1 className="font-bold text-3xl">Бүтээгдэхүүн</h1>
          <span className="text-slate-300">Шинэ бүтээгдэхүүн нэмэх</span>
        </div>
        <ProducrtAddCard onAddProduct={addProduct} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} el={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AddProduct;
