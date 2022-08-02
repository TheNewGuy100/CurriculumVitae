import type { NextPage } from 'next'
import styles from './home.module.scss'

const HomePage: NextPage = () => {
  return (
      <>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Bem-vindo a <a href="https://www.iguatemi365.com/">Home iguatemi 365</a>
          </h1>
        </main>
      </>
  )
}

export default HomePage
