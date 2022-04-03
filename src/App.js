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

function App() {
    console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);
    return (
        <div className="App">
            <h1>Root App</h1>
            <div className="row">
                <MicroApp1/>
                <MicroApp2/>
            </div>
        </div>
  );
}

export default App;
