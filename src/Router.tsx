import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Courses } from './pages/Cources/Courses'
import { Calendar } from './pages/Calendar'

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/calendar" element={<Calendar/>}/>
        </Routes>
    )
}