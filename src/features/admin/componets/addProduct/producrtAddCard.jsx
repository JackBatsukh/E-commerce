import React, { useState } from "react";

const ProducrtAddCard = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    price: "",
    images: "",
    description: "",
    brand: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    if (onAddProduct) {
      onAddProduct(formData);
    }
    setFormData({
      id: "",
      title: "",
      price: "",
      images: "",
      description: "",
      brand: "",
      category: "",
    });
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <div className="bg-white border-2 border-gray-200 p-4 shadow-lg">
      <div className=" rounded lg:flex-wrap">
        <div className="flex flex-wrap gap-4 items-center justify-center p-4 rounded-lg lg:flex-wrap">
          <div className="flex bg-white border-2 p-2 add">
            <img src="src\assets\product-svgrepo-com (3).svg" alt="" />
            <input
              type="text"
              name="id"
              value={formData.id}
              placeholder="Бүтээгдэхүүний id..."
              className="input  w-full max-w-xs bg-white lg:w-screen"
              onChange={handleChange}
            />
          </div>
          <div className="flex bg-white border-2 p-2 add">
            <img src="src\assets\product-svgrepo-com (3).svg" alt="" />
            <input
              type="text"
              name="title"
              value={formData.title}
              placeholder="Бүтээгдэхүүний нэр..."
              className="input w-full max-w-xs bg-white lg:w-screen"
              onChange={handleChange}
            />
          </div>
          <div className="flex bg-white border-2 p-2 add">
            <img src="src\assets\price-svgrepo-com.svg" alt="" />
            <input
              type="text"
              name="price"
              value={formData.price}
              placeholder="Бүтээгдэхүүний үнэ..."
              className="input w-full max-w-xs bg-white lg:w-screen"
              onChange={handleChange}
            />
          </div>
          <div className="flex bg-white border-2 p-2 add">
            <img src="src\assets\image-square-svgrepo-com.svg" alt="" />
            <input
              type="text"
              name="images"
              value={formData.images}
              placeholder="Зургийн линк..."
              className="input w-full max-w-xs bg-white lg:w-screen"
              onChange={handleChange}
            />
          </div>
          <div className="flex bg-white border-2 p-2 add">
            <img src="src\assets\information-square-svgrepo-com.svg" alt="" />
            <input
              type="text"
              name="description"
              value={formData.description}
              placeholder="Мэдээлэл..."
              className="input w-full max-w-xs bg-white lg:w-screen"
              onChange={handleChange}
            />
          </div>
          <div className="flex bg-white border-2 p-2 add items-center">
            <img src="src\assets\category-svgrepo-com.svg" alt="" />
            <input
              type="text"
              name="category"
              value={formData.category}
              placeholder="Категори..."
              className="input w-full max-w-xs bg-white lg:w-screen"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-center mb-8 rounded-lg">
          <div className="flex bg-white border-2 p-2 items-center add lg:w-[372px]">
            <img
              src="src\assets\Screenshot_2025-01-06_210416-removebg-preview (1).png"
              alt=""
              className="w-auto h-[30px]"
            />
            <input
              type="text"
              name="brand"
              value={formData.brand}
              placeholder="Брэнд..."
              className="input  w-full max-w-xs bg-white"
              onChange={handleChange}
            />
          </div>
          <div className="flex bg-white border-2 p-2 add">
            <img src="src\assets\product-svgrepo-com (3).svg" alt="" />
            <input
              type="text"
              value={formData.discountPercentage}
              placeholder="Байршил"
              className="input w-full max-w-xs bg-white lg:w-screen"
              onChange={handleChange}
            />
          </div>
          <div className="flex bg-white border-2 p-2 add">
            <img src="src\assets\price-svgrepo-com.svg" alt="" />
            <input
              type="text"
              value={formData.stock}
              placeholder="Бар кодийн төрөл"
              className="input w-full max-w-xs bg-white lg:w-screen"
              onChange={handleChange}
            />
          </div>
          <div className="flex bg-white border-2 p-2 add">
            <img src="src\assets\image-square-svgrepo-com.svg" alt="" />
            <input
              type="text"
              value={formData.weight}
              placeholder="Жин (кг)"
              className="input w-full max-w-xs bg-white lg:w-screen"
              onChange={handleChange}
            />
          </div>
          <div className="flex bg-white border-2 p-2 add">
            <img src="src\assets\information-square-svgrepo-com.svg" alt="" />
            <input
              type="text"
              value={formData.width}
              placeholder="Өргөн"
              className="input w-full max-w-xs bg-white lg:w-screen"
              onChange={handleChange}
            />
          </div>
          <div className="flex bg-white border-2 p-2 add items-center">
            <img src="src\assets\category-svgrepo-com.svg" alt="" />
            <input
              type="text"
              value={formData.height}
              placeholder="Өндөр"
              className="input w-full max-w-xs bg-white lg:w-screen"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8">
        <button className="btn btn-outline btn-success" onClick={handleAdd}>
          Нэмэх
        </button>
        <button className="btn btn-outline btn-error" onClick={handleAdd}>
          Гарах
        </button>
      </div>
    </div>
  );
};

export default ProducrtAddCard;

