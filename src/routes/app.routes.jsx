import { Routes, Route } from "react-router-dom";
import  App  from '../pages/home/App'
export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={ <App/> }/>
        </Routes>
    )
}