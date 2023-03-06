import React, { useEffect } from 'react';
import { Dispatch, } from "redux"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from '../../redux/action';

const DashboardPage = React.memo(() => {
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
      DASHBOARD
    </>
  );
});


export default DashboardPage;
