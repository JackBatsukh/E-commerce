import React, { useContext, useEffect, useState } from "react";
import Head from "../../../shared/components/Nav/head";
import Category from "../../../shared/components/Nav/category";
import BackButton from "../../../shared/components/back-button";
import Brand from "../components/brand";
import Title from "../components/title";
import Rating from "../components/rating";
import Price from "../components/price";
import WishButton from "../../../shared/components/wishButton";
import Description from "../components/description";
import CostumizeColor from "../components/costumizeColor";
import ShoeSize from "../components/shoeSize";
import Information from "../components/information";
import OtherReviews from "../components/otherReviews";
import Review from "../components/review";
import { useParams } from "react-router";
import Footer from "../../../shared/components/footer";
import Image from "../components/image";
import Layout from "../../../shared/components/layout";
import cartContext from "../../cart/hooks/cartContext";

const SingleProduct = () => {
  const param = useParams();
  const [productData, setProductData] = useState([]);
  const [rating, setRating] = useState(0);
  const [wishData, setWishData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${param.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData([data]);
        setRating(data.rating);
      });
  }, [param.id]);

  const handleWish = () => {
    const wishArr = JSON.parse(localStorage.getItem("wish")) || [];
    const wishItem = productData[0];

    if (wishArr.some((item) => item.id === wishItem.id)) {
      alert("This item is already in your wishlist!");
      return;
    }

    const updatedWishList = [...wishArr, wishItem];

    localStorage.setItem("wish", JSON.stringify(updatedWishList));

    setWishData(updatedWishList);
  };

  const { addToCart } = useContext(cartContext);

  return (
    <Layout>
      <div className=" w-full h-fit flex flex-col bg-[#f6f6f6] ">
        <div className="mobile w-full h-fit flex flex-col bg-[#f6f6f6] md:hidden">
          <div className="w-full px-[10px] py-[20px] lg:px-[40px]">
            <BackButton />
          </div>
          <div className="w-full h-fit flex justify-center items-center">
            {productData.map((el) => {
              return <Image key={el.id} data={el} />;
            })}
          </div>
          <div className="w-full h-fit py-[30px]">
            <div className="w-full h-fit flex px-[10px] py-[15px] ">
              <div className="w-[300px]">
                {productData.map((el) => {
                  return <Brand key={el.id} data={el} />;
                })}
                {productData.map((el) => {
                  return <Title key={el.id} data={el} />;
                })}
                <div className="flex flex-row items-center gap-[10px]">
                  <div className="flex flex-row items-center">
                    {Array.from({ length: rating }, (_, i) => (
                      <Rating key={i} />
                    ))}
                  </div>
                  <h1 className="text-[#000]/20">(300,000)</h1>
                </div>
              </div>
            </div>
            <div className="w-full h-fit px-[10px] py-[5px] flex flex-row justify-between items-end">
              {productData.map((el) => {
                return <Price key={el.id} data={el} />;
              })}
              <div className="buttons flex flex-col items-end gap-[10px]">
                <WishButton wishHandle={handleWish} />
                <button
                  className="w-[130px] h-[40px] bg-[#282828] text-[#fff] rounded-[10px]"
                  onClick={() => addToCart(productData)}>
                  Сагсанд нэмэх
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col gap-[30px] border-t-[1px] rounded-t-[20px] bg-[#fff] py-[30px] px-[20px]">
            <CostumizeColor />
            <ShoeSize />
            {productData.map((el) => {
              return <Description key={el.id} data={el} />;
            })}
            <Information />
            <div className="flex flex-row gap-[10px] overflow-x-auto">
              {productData.map((el) => {
                return el.reviews
                  ? el.reviews.map((review, index) => (
                      <OtherReviews key={index} data={review} />
                    ))
                  : null;
              })}
            </div>
            <Review />
          </div>
        </div>
        <div className="desktop w-full h-fit flex-col items-center bg-[#f6f6f6] hidden md:flex ">
          <div className="content w-full max-w-[1440px] flex  flex-row gap-[10px] px-[10px] py-[20px]">
            <div className="left w-1/2 flex flex-col gap-[20px] ">
              <div
                className="image flex justify-center rounded-xl border-[1px] max-w-[500px] "
                style={{ paddingTop: "50px" }}>
                {productData.map((el) => {
                  return <Image key={el.id} data={el} />;
                })}
              </div>
              <div className="about border-[1px] flex flex-col gap-[20px] rounded-[20px] bg-[#fff] py-[30px] px-[20px] max-w-[500px]">
                {productData.map((el) => {
                  return <Description key={el.id} data={el} />;
                })}
                <Information />
              </div>
            </div>
            <div
              className="right w-1/2 flex flex-col gap-[20px]"
              style={{ paddingTop: "50px" }}>
              <div className="w-full flex flex-col">
                <div className="w-full h-fit flex flex-col px-[10px] py-[15px] ">
                  <div className="w-[300px]">
                    {productData.map((el) => {
                      return <Brand key={el.id} data={el} />;
                    })}
                    {productData.map((el) => {
                      return <Title key={el.id} data={el} />;
                    })}
                    <div className="flex flex-row items-center gap-[10px]">
                      <div className="flex flex-row items-center">
                        {Array.from({ length: rating }, (_, i) => (
                          <Rating key={i} />
                        ))}
                      </div>
                      <h1 className="text-[#000]/20">(300,000)</h1>
                    </div>
                  </div>
                  <div className="w-full h-fit px-[10px] py-[5px] flex flex-row justify-between items-end">
                    {productData.map((el) => {
                      return <Price key={el.id} data={el} />;
                    })}
                    <div className="buttons flex flex-col items-end gap-[10px]">
                      <WishButton wishHandle={handleWish} />
                      {productData.map((el) => {
                        return (
                          <button
                            className="w-[130px] h-[40px] bg-[#282828] text-[#fff] rounded-[10px]"
                            onClick={() => addToCart(el)}>
                            Сагсанд нэмэх
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="w-full h-fit flex flex-col gap-[30px] border-t-[1px] rounded-t-[20px] bg-[#fff] py-[30px] px-[20px]">
                  <CostumizeColor />
                  <ShoeSize />

                  <div className="flex flex-col gap-[20px]">
                    <h1 className="font-medium text-[20px] text-start text-black">
                      Сэтгэгдэл
                    </h1>
                    <div className="flex flex-row gap-[10px] overflow-auto ">
                      {productData.map((el) => {
                        return el.reviews
                          ? el.reviews.map((review, index) => (
                              <OtherReviews key={index} data={review} />
                            ))
                          : null;
                      })}
                    </div>
                  </div>
                  <Review />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
