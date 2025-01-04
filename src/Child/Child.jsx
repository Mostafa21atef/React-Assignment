import React from 'react'

export default function Child({products,deleteProduct,editProduct,index}) {
  let{id,name,price,category,onSale}=products;
    return <>
  
  <div className="col-md-4 ">
    <div className="inner bg-secondary text-white p-3 rounded-3 position-relative">
      <h4>Id:{id}</h4>
      <h4>Name:{name}</h4>
      <h4>price:{price}</h4>
      <h4>Category:{category}</h4>
      <h4>onSale:{onSale}</h4>
      <button onClick={()=>deleteProduct(id)} className='btn btn-danger w-100'>Delete</button>
    <button onClick={()=>editProduct(index)} className='btn btn-warning w-100 mt-2'>Update</button>
    {onSale ==true?<div className="position-absolute bg-danger top-0 end-0 p-2">Sale</div> :null}
    </div>
  </div>
  </>
  
}
