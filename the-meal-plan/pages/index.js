import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>The Meal Plan Project - Login</title>
        <link rel="icon" href="/img/logo_canva.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image src="/img/The meal Plan.png" alt="Logo principal" width="400" height="400"  />
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h4><label for="user">Usuario</label></h4>
            <input type="mail" id="user" name="user" />
            <h4><label for="user">Contraseña</label></h4>
            <input type="password" id="pass" name="pass" />
          </div>
          <div className={styles.options}>
            <p>Olvidaste la contraseña</p>
            <p>Resgitrarse</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://josealbertolorenzo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/img/logoBlack.png" alt="Logo Jose" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
