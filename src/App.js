import {
    Route,
    Routes,
    Navigate,
} from "react-router-dom"
import AuthPage from "./pages/Auth";
import './App.css';
import MicroAppLoader from './MicroAppLoader';


const MICRO_APP_1_HOST = process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_MICRO_APP_1_PROD_HOST
    : process.env.REACT_APP_MICRO_APP_1_DEV_HOST
const MICRO_APP_2_HOST = process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_MICRO_APP_2_PROD_HOST
    : process.env.REACT_APP_MICRO_APP_2_DEV_HOST

const MicroApp1 = ({history}) => (
    <MicroAppLoader history={history} host={MICRO_APP_1_HOST} name="MicroApp1"/>
)

const MicroApp2 = ({history}) => (
    <MicroAppLoader history={history} host={MICRO_APP_2_HOST} name="MicroApp2"/>
)

function Home() {
    console.log('home')
    return (
        <>
            <h1>Root App with Auto Deploying</h1>
            <div className="row">
                <MicroApp1/>
                <MicroApp2/>
            </div>
        </>
    )
}

function App() {
    console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);

    return (
        <div className="App">
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/auth' element={<AuthPage/>} />
                <Route
                    path="/"
                    element={<Navigate to="/home" replace />}
                />
            </Routes>
        </div>
  );
}

export default App;
