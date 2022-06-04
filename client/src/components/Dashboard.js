import React, { useState,useEffect, useContext } from 'react'
import './styles.css'
import Papa from "papaparse"
import { store } from "../App";
import axios from 'axios';
import BootstrapTable from "react-bootstrap-table-next";

const Dashboard = () => {
  const [product,setProducts] = useState([]);
  const [final,setFinal] = useState([]);
  const [token,] = useContext(store)
  const [data,setData] = useState([]);
  const onUploadProduct = (e) => {
    const products = e.target.files;
    if(products)
    {
      // setFileName(products[0].name)
      Papa.parse(products[0],{
        download:true,
        header:true,
        complete: (result) => {
          console.log(result.data)
          const prds = result.data.map((ele) => ({
            ...ele,
            _createdBy: token ? token.firstName : "user"
          }))
          setProducts(prds.splice(0,prds.length-1))
        }
      })
    }
  }
  useEffect(() => {
    // console.log(product)
    axios.get("http://localhost:5000/product/getProducts").then((res) => {
    setData(res.data)
  })
    setFinal(product)
  },)
  // console.log(final)
  const pushData = () => {
    console.log(final)
    if(final){
      axios.post("http://localhost:5000/product/addproduct",final).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
  const columns = [{
    dataField: 'name',
    text: 'Name'
  }, {
    dataField: 'description',
    text: 'Description'
  }, {
    dataField: 'price',
    text: 'Price'
  }, {
    dataField: 'quantity',
    text: 'Quantity'
  }, {
    dataField: '_createdBy',
    text: 'CreatedBy'
  }];
  return (
    <div className=''>
      <h1 className='text-center' style={{borderBottom:"2px solid black"}}>Products</h1>
      <div className='d-flex justify-content-between container-md mt-3'>
        <div>
          <h3 className='text-center heading'>List of products</h3>
          <BootstrapTable keyField='id' data={ data } columns={ columns } />
        </div>
        <div className='ml-5'>
          {/* <div> */}
          {/* <label htmlFor='product' className='btn btn-primary'>Add products</label> */}
          <input type="file" accept='.csv' id='product' onChange={onUploadProduct}/>
          {/* </div> */}
          {/* <div> */}
            <button className='btn btn-primary mt-3' onClick={pushData}>Click to upload</button>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}
export default Dashboard;
