import react, { Fragment,useState,useCallback} from 'react'
import { Container, Row,Col,Table } from 'react-bootstrap'
import { leaderboardAction } from '../store/leaderboardSlice'
import { useSelector } from 'react-redux'
import MyPagination from './reports/MyPagination'


const ShowLeaderBoard=()=>{

    const [page,setPage]=useState(1)
    const [posts,setPostsPerPage]=useState(localStorage.getItem('leaderboardpostperscreen'))

   const expenses=useSelector(state=>state.leaderboard.expenses)
  const totalPage=useSelector(state=>state.leaderboard.totalPages)

   const changePage=useCallback((page)=>{
    console.log('hi')
     setPage(page)
  },[])

  const changePageLimit=(event)=>{
    console.log(event.target.value)
    localStorage.setItem('leaderboardpostperscreen',event.target.value)
    setPostsPerPage(event.target.value)
  }

    return(
        <Fragment>
            <Container>
               <Row>
                <h2>LeaderBoard</h2>
                <Table striped bordered hover variant="" className="">
      <thead >
        <tr >
        <th className="bg-info ">#</th>
          <th className="bg-info ">User Name</th>
          <th className="bg-info">Total Expenses</th>
        </tr>
      </thead>
      <tbody>
      {expenses.slice(((page-1)*posts),(page*posts)).map((expense,index)=>
                   <tr>
                    <td>{index+1}</td>
                    <td>{expense.username}</td>
                     <td>{expense.totalExpenses}</td>
                    </tr>
                )}
      </tbody>
    </Table>
    </Row> 
    <Row className="">
      <Col className="">
        <MyPagination total={totalPage} current={page} onChangePage={changePage}/>
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

export default ShowLeaderBoard