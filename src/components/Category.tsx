import React, { useEffect, useState } from "react";
import { IProducts } from "../types/userTypes";
import { addProduct, getProduct, updateProducts } from "../Api/products";
import { useForm } from "react-hook-form";

const Category: React.FC = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const { register, handleSubmit, setValue } = useForm<IProducts>();
  const [updateId, setupdateId] = useState<number>();

  const fetchProducts = async () => {
    try {
      const data = await getProduct();
      setProducts(data?.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onSubmit = async (data: IProducts) => {
    try {
      const response = await addProduct(data.title);
      console.log("Muvaffaqiyatli qo'shildi", response);
    } catch (error) {
      console.error(error);
    }
  };

  const editProduct = async (data: IProducts) => {
    setupdateId(data.id);
    setValue("title1", data.title);
  };

  const updateProduct = async (data: IProducts) => {
    try {
      const response = await updateProducts(updateId, data.title1);
      console.log("Success", response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" {...register("title")} className="border" />
      <button onClick={handleSubmit(onSubmit)}>Save</button>

      <input type="text" {...register("title1")} className="border" />
      <button onClick={handleSubmit(updateProduct)}>Update</button>

      {products.map((product, index) => (
        <div key={index}>
          {index + 1}.{product.title}
          <button onClick={() => editProduct(product)}>Update</button>
        </div>
      ))}
    </div>
  );
};

export default Category;
