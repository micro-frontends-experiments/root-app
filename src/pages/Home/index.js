import { useEffect } from 'react';
import MicroAppLoader from '../../MicroAppLoader';
import { getUser } from '../../api/endpoints';

const MICRO_APP_1_HOST = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_MICRO_APP_1_PROD_HOST
  : process.env.REACT_APP_MICRO_APP_1_DEV_HOST;
const MICRO_APP_2_HOST = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_MICRO_APP_2_PROD_HOST
  : process.env.REACT_APP_MICRO_APP_2_DEV_HOST;

function MicroApp1({ history }) {
  return <MicroAppLoader history={history} host={MICRO_APP_1_HOST} name="MicroApp1" />;
}

function MicroApp2({ history }) {
  return <MicroAppLoader history={history} host={MICRO_APP_2_HOST} name="MicroApp2" />;
}

export default function Home() {
  console.log('home');

  useEffect(() => {
    getUser().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <>
      <h1>Root App with Auto Deploying</h1>
      <div className="row">
        <MicroApp1 />
        <MicroApp2 />
      </div>
    </>
  );
}
