import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = ({authorization, redirectPath="/",children}) => {
    if(!authorization) {
        return <Navigate to={redirectPath} replace/>
    }
    return children ? children : <Outlet/>
}

export default PrivateRoute