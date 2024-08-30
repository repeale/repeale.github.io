import Head from 'next/head'
import styles from './index.module.css'

import { resume } from '../src/resume'

const Home = () => (
  <>
    <Head>
      <meta name="description" content={resume.basics.name} />
      <title>{resume.basics.name}</title>
    </Head>
    <div className={styles.bg}>
      <div style={{margin: '20px'}}>
        <p>👋 Hello, I'm</p>
        <h1>{resume.basics.name}</h1>
        <p>{resume.basics.summary}</p>
        <div className={styles.socialLinks}>
          {resume.basics.profiles.slice(1).map((x, i) => (
            <div key={i}>
              <a href={x.url} target="new">
                {x.network}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
)

// export async function getStaticProps() {
//   const res = await fetch('https://gitconnected.com/v1/portfolio/repeale')
//   const resume = await res.json()


//   return {
//     props: {
//       resume,
//     },
//   }
// }

export default Home
