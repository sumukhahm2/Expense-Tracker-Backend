import React, { Fragment,useCallback,useState,useEffect} from "react";
import { Container,Table,Button,Row, Col } from "react-bootstrap";
import {  useSelector,useDispatch } from "react-redux";
import { expenseAction } from "../store/expenseSlice";
import { Pagination } from "react-bootstrap";
import MyPagination from "./reports/MyPagination";
const ExpenseList=()=>{
    const [page,setPage]=useState(1)
    const [posts,setPostsPerPage]=useState(localStorage.getItem('postperscreen'))
  const expenses=useSelector(state=>state.expense.expenses)
  const totalPage=useSelector(state=>state.expense.totalPages)
  const dispatch=useDispatch()



 
  const deleteExpense=async(id)=>{
    
    const res=await fetch(`http://51.20.144.40:3000/expense/delete-expense/${id}`,{
        method:'DELETE',
        headers:{
          'Authorization':localStorage.getItem('token')
        }
    })

    const data=await res.json()

     dispatch(expenseAction.deleteExpense(id))
     

  }
  console.log(totalPage)

  const changePage=useCallback((page)=>{
    console.log('hi')
     setPage(page)
  },[])
  console.log(expenses.length%posts)
  const total=(expenses.length%posts===0)?Math.floor(expenses.length/posts):Math.floor(expenses.length/posts)+1
  const changePageLimit=(event)=>{
    console.log(event.target.value)
    localStorage.setItem('postperscreen',event.target.value)
    setPostsPerPage(event.target.value)
  }
    return(
        <Fragment>
           <Container>
            
           <Table striped bordered hover variant="" className="">
      <thead >
        <tr >
        <th className="bg-info ">#</th>
          <th className="bg-info ">Expense Amount</th>
          <th className="bg-info">Description</th>
          <th className="bg-info">Category  </th>
          <th className="bg-info">Action  </th>
        </tr>
      </thead>
      <tbody>
        { expenses.slice(((page-1)*posts),(page*posts)).map((item,index)=>
        <tr key={item.id}>
          <td>{((page-1)*posts)+index+1}</td>
          <td>{item.expenseAmount}</td>
          <td>{item.description}</td>
          <td>{item.category}</td>
          <td><Button className="btn-danger" onClick={deleteExpense.bind(null,item.id)}>Delete</Button></td>
        </tr>
         )}
      </tbody>
    </Table>
  <Row className="">
      <Col className="">
        <MyPagination total={total} current={page} onChangePage={changePage}/>
    </Col>
    <Col className="col-2">
      
       <select onChange={changePageLimit}>
         <option value='5'>5</option>
         <option value='10'>10</option>
         <option value='20'>20</option>
         <option value='50'>50</option>
        </select>
        
    </Col>  
   </Row>
           </Container>
         </Fragment> 
    )
}

export default ExpenseList