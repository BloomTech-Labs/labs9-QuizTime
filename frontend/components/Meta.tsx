import Head from 'next/head';

const Meta = () => (
  <>
    <Head>
      <meta name='viewport' content='width=device-width initial-scale=1' />
      <meta charSet='utf-8' />
      <script id='stripe-js' src='https://js.stripe.com/v3/' />
      <link href='/static/datepicker.css' rel='stylesheet' />
      <title>QuizTime</title>
    </Head>
    <style jsx='true' global='true'>
      {`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
      `}
    </style>
  </>
);

export default Meta;
