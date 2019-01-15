import Head from 'next/head'

const Meta = () => (
  <>
    <Head>
      <meta name='viewport' content='width=device-width initial-scale=1' />
      <meta charSet='utf-8' />
      <title>QuizTime</title>
    </Head>
    <style jsx='true' global='true'>{`
    * { 
      box-sizing: border-box; 
      margin: 0; 
      padding: 0;
    }

    `}
    </style>
  </>
)

export default Meta
