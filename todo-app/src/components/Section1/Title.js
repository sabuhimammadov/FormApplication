import React from "react";
import { FcTodoList } from 'react-icons/fc';
import style from "../Section1/Title.module.css"
export class Title extends React.Component{
    render(){
        return(
            <>
            <div className="d-flex align-items-center mb-3  justify-content-center">
            <FcTodoList className="fs-4 me-2"/>
   <h3 className={style.title}>Welcome Form  App</h3>


            </div>

            </>

        )
    }
}