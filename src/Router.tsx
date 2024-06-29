import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Courses } from './pages/Cources/Courses'

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/courses" element={<Courses/>}/>

        </Routes>
    )
}