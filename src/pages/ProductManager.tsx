
import React, { useState } from "react";
import { ProductType } from "../type/TypeProduct";
interface ProductProps {
    products: ProductType[];
    onRemove: (id: string) => void

}


const ProductManager = (props: ProductProps) => {
   
    const removeItems = (id:string) => {
        var x = confirm("Are you sure you want to delete?");
        if (x){
            props.onRemove(id)
           
    
        }
      
           
    

    }

    return (


        <div className="container mx-auto px-4 sm:px-8">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <a href="products/add">Add Product</a>

            </button>

            <div className="py-8">
                <div>
                    <h2 className="text-2xl font-semibold leading-tight">Invoices</h2>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Description
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Actions
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Actions
                                    </th>

                                    {/* <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100" /> */}
                                </tr>
                            </thead>
                            <tbody>
                                {props.products.map((item) => {
                                    return (
                                        <>
                                            <tr>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div className="flex">

                                                        <div className="ml-3">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {item.name}
                                                            </p>

                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">${item.price}</p>
                                                    <p className="text-gray-600 whitespace-no-wrap">USD</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">{item.description}</p>
                                                    {/* <p className="text-gray-600 whitespace-no-wrap">Due in 3 days</p> */}
                                                </td>

                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <a href={`/products/${item.id}/edit`} className="text-gray-900 whitespace-no-wrap">Edit</a>

                                                </td>

                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <button onClick={() => removeItems(item.id)}  className="text-gray-900 whitespace-no-wrap">Delete</button>

                                                </td>

                                            </tr>

                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>



    )
}


export default ProductManager
