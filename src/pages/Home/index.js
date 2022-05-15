import MicroAppLoader from '../../MicroAppLoader';

const MICRO_APP_1_HOST = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_MICRO_APP_1_PROD_HOST
  : process.env.REACT_APP_MICRO_APP_1_DEV_HOST;
// const MICRO_APP_2_HOST = process.env.NODE_ENV === 'production'
//   ? process.env.REACT_APP_MICRO_APP_2_PROD_HOST
//   : process.env.REACT_APP_MICRO_APP_2_DEV_HOST;

function MicroApp1({ history, userId }) {
  return (
    <MicroAppLoader
      history={history}
      host={MICRO_APP_1_HOST}
      name="MicroApp1"
      userId={userId}
    />
  );
}

// function MicroApp2({ history }) {
//   return (
//     <MicroAppLoader
//       history={history}
//       host={MICRO_APP_2_HOST}
//       name="MicroApp2"
//       resolvers={{
//         resolveNotes: getNotes,
//         putNote,
//       }}
//     />
//   );
// }

export default function Home({ userId }) {
  console.log('home');

  return (
    <div className="h-screen">
      <div>
        <MicroApp1 userId={userId} />
      </div>
      {/* <div> */}
      {/*  <MicroApp2 /> */}
      {/* </div> */}
    </div>
  );
}
