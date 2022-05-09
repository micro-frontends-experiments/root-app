import MicroAppLoader from '../../MicroAppLoader';
import { getNotes } from '../../api/endpoints';

const MICRO_APP_1_HOST = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_MICRO_APP_1_PROD_HOST
  : process.env.REACT_APP_MICRO_APP_1_DEV_HOST;
const MICRO_APP_2_HOST = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_MICRO_APP_2_PROD_HOST
  : process.env.REACT_APP_MICRO_APP_2_DEV_HOST;

function MicroApp1({ history }) {
  return (
    <MicroAppLoader
      history={history}
      host={MICRO_APP_1_HOST}
      name="MicroApp1"
      resolvers={{
        resolveNotes: getNotes,
      }}
    />
  );
}

function MicroApp2({ history }) {
  return (
    <MicroAppLoader
      history={history}
      host={MICRO_APP_2_HOST}
      name="MicroApp2"
      resolvers={{
        resolveNotes: getNotes,
      }}
    />
  );
}

export default function Home() {
  console.log('home');
  return (
    <div className="flex flex-row mx-auto h-screen px-4 py-4 justify-around">
      <div className="basis-[48%]">
        <MicroApp1 />
      </div>
      <div className="basis-[48%]">
        <MicroApp2 />
      </div>
    </div>
  );
}
