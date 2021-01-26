import React,{useState} from "react";
import { FormControl, InputLabel, Input } from '@material-ui/core';
import {Form} from "reactstrap";
import axios from "axios";

const TableNumber = () => {
const[table , setTable] = useState({
    number:""})

const onChangeEvent = (e) => {
    setTable({...table , [e.target.name]:e.target.value})
}

const onSubmit = async e =>{
    e.preventDefault();
    let formData = new FormData();
    formData.append('number', table.number)
   

    axios({
        method: 'post',
        url: 'http://localhost:3003/users',
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
        //handle success
        console.log(response)

    })
    .catch(function (response) {
        //handle error
        console.log(response.data)
    });
}

return(
    <>
     <Form onSubmit={e=>onSubmit(e)}>
    <FormControl>
  <InputLabel htmlFor="my-input">Table no.</InputLabel>
  <Input id="my-input"
  type="number" aria-describedby="Table Number" 
  name="number"
  value={table.number}
  onChange={e=>onChangeEvent(e)}/>
</FormControl>
</Form>
    </>
)
}
export default TableNumber;