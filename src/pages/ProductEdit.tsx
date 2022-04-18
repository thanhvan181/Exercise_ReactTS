import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { ProductType } from "../type/TypeProduct";
import {useParams} from "react-router-dom"
import { read } from '../api/product';
import {useEffect}  from "react"
// import use
type ProductUpdateProps = {

    
  onUpdate: (id: any, product: ProductType) => void
}



const ProductEdit = (props: ProductUpdateProps) => {

  const {id} = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

useEffect(() => {
  const getProduct = async () => {

    const {data}  = await read(id);
    reset(data);
    


  }
  getProduct();
  
  
}, [])
const onSubmit:SubmitHandler<any> = (data:any) => {
    console.log("data", data);

    props.onUpdate(id, data);

}
  return (
    <div className="w-full">
    <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Edit Products</h2>
    <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
  
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Name</label>
          <input type="text" id="name" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-" {...register('name',{ required: true })} />
          {errors.name && <p>Last name is required.</p>}
        </div>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Price</label>
          <input type="number" id="price"  placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-" {...register('price',{ required: true })}/>
          {errors.price && <p>Last price is required.</p>}
        </div>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Description</label>
          <textarea
        className="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="exampleFormControlTextarea1"
        {...register('description',{ required: true })}
        placeholder="Your message"
      ></textarea>
      {errors.description && <p>Last description is required.</p>}
        </div>
        <div className="mb-5">
          <label htmlFor="twitter" className="block mb-2 font-bold text-gray-600">Img</label>
          <input type="file" id="img" name="img" placeholder="Put in your fullname." className="border border-red-300 shadow p-3 w-full rounded mb-" />
          
        </div>
        <button type="submit" className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
      </form>
    </div>
          </div>
  )
}

export default ProductEdit