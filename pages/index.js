import Head from 'next/head'
import styles from './index.module.css'

const Home = ({ cv }) => (
  <>
    <Head>
      <meta name="description" content={cv.basics.name} />
      <title>{cv.basics.name}</title>
    </Head>
    <div className={styles.bg}>
      <div style={{ margin: '20px' }}>
        <p>👋 Hello, I'm</p>
        <h1>{cv.basics.name}</h1>
        <p>{cv.basics.summary}</p>
        <div className={styles.socialLinks}>
          {cv.basics.profiles.slice(1).map((x, i) => (
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

export async function getStaticProps() {
  const res = await fetch('https://gitconnected.com/v1/portfolio/repeale')
  const cv = await res.json()

  return {
    props: {
      cv,
    },
  }
}

export default Home
