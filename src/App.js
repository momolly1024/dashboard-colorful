import './App.css'
import MainDash from './components/MainDash/MainDash'
import RightSide from './components/RightSide/RightSide'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Test = () => {
    return <div>qqqqqqqqqqqqqq</div>
}
function App() {
    return (
        <div className='App'>
            <div className='AppGlass'>
                <Sidebar />
                <MainDash />
                <RightSide />
            </div>
        </div>
    )
}

export default App
