import MicroAppLoader from '../../MicroAppLoader';

const MICRO_APP_1_HOST = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_MICRO_APP_1_PROD_HOST
  : process.env.REACT_APP_MICRO_APP_1_DEV_HOST;
const MICRO_APP_2_HOST = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_MICRO_APP_2_PROD_HOST
  : process.env.REACT_APP_MICRO_APP_2_DEV_HOST;

function MicroApp1(props) {
  return (
    <MicroAppLoader
      host={MICRO_APP_1_HOST}
      name="MicroApp1"
      {...props}
    />
  );
}

function MicroApp2(props) {
  return (
    <MicroAppLoader
      host={MICRO_APP_2_HOST}
      name="MicroApp2"
      {...props}
    />
  );
}

const APP_NAME = 'Micro Frontends Notes';
const AUTH_COOKIE_NAME = 'secret-token';

export default function Home({ userId }) {
  console.log('home');

  return (
    <div className="container mx-auto h-full pb-4">
      <div className="">
        <MicroApp2 userId={userId} appName={APP_NAME} authCookieName={AUTH_COOKIE_NAME} />
      </div>
      <div className="h-full">
        <MicroApp1 userId={userId} />
      </div>
    </div>
  );
}
