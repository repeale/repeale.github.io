import Head from 'next/head'
import Image from 'next/image'

const fomatCompactDate = date =>
  new Date(date).toLocaleString('it-IT', {
    year: 'numeric',
    month: 'long',
  })

const Home = ({ cv }) => (
  <>
    {/* {JSON.stringify(cv)} */}
    <Head>
      <title>
        {cv.basics.name} - {cv.basics.label}
      </title>
    </Head>

    <div className="image animated fadeIn center">
      <Image src={cv.basics.image} alt="" width={320} height={320} />
    </div>
    <h1 className="animated fadeIn delay-1s center">{cv.basics.name}</h1>
    <h2 className="animated fadeIn delay-2s center">{cv.basics.label}</h2>
    <br />

    {cv.work.map((x, i) => (
      <div key={i}>
        <strong>{x.company}</strong> -{fomatCompactDate(x.startDate)}-
        {x.endDate ? fomatCompactDate(x.startDate) : 'current'}
        <ul>
          {x.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>
    ))}
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
