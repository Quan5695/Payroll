import React, { useEffect } from 'react';
import { Dispatch, } from "redux"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from '../../store/action';

const DashboardPage = React.memo(() => {

  //Checking store
  const productList = useSelector((state: any) => state.todo);
  const dispatch: Dispatch<any> = useDispatch()
  useEffect(() => {
    dispatch(addTodo('check'))
  }, [])
  useEffect(() => {
    console.log("productList", productList)
  }, [productList])


  return (
    <>
      <div>
        <span>DASHBOARD</span>
      </div>

    </>
  );
});


export default DashboardPage;
