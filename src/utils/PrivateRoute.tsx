import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Floor from "../pages/Floor/Floor";
import {  RState } from "../store/store";
import { Navigate } from "react-router-dom";

interface childrenProp{
    children:React.ReactNode
}

const PrivateRoute = ({ children}:childrenProp) => {
    const navigate = useNavigate()
    //FILL HERE 3.6
    const {index} = useParams()
    const floor = useSelector((state:RState) => state.floor)
    if(floor[Number(index)] == false)
    {
        return children
    }
    else{
        navigate(`/forbidden`)
    }
};

export default PrivateRoute