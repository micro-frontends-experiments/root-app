import './App.css';
import MicroAppLoader from './MicroAppLoader';

const MICRO_APP_1_HOST = 'http://localhost:3000'
const MICRO_APP_2_HOST = 'http://localhost:3001'

const MicroApp1 = ({history}) => (
    <MicroAppLoader history={history} host={MICRO_APP_1_HOST} name="MicroApp1"/>
)

const MicroApp2 = ({history}) => (
    <MicroAppLoader history={history} host={MICRO_APP_2_HOST} name="MicroApp2"/>
)

function App() {
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
