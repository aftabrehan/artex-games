import Link from 'next/link'

import Button from 'components/button'

import stl from './Home.module.scss'

const Home = () => (
  <div className={stl.wrapper}>
    <h1>Artex Game</h1>

    <Button label="Yay!" />

    <Link href="/stories">
      <a className={stl.link}>
        You can also checkout story of the components 🚀
      </a>
    </Link>
  </div>
)

export default Home
