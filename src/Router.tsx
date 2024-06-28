import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Courses } from './pages/Cources/Courses'
import { Calendar } from './pages/Calendar'
import { PrimaryDay } from './pages/Cources/PrimaryDay'
import { SecondDay } from './pages/Cources/SecondDay'

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/calendar" element={<Calendar/>}/>
            <Route path="/primaryday" element={<PrimaryDay/>}/>
            <Route path="/secondday" element={<SecondDay/>}/>
        </Routes>
    )
}