import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Floor from "../pages/Floor/Floor";
import { RootState, RState } from "../store/store";

interface IPrivateRoute{
    component: ReactNode,
}

const PrivateRoute = ({ component}:IPrivateRoute) => {
    //FILL HERE 3.6
    const {index} = useParams()
    const floor = useSelector((state):RState => state.floor)
};

export default PrivateRoute