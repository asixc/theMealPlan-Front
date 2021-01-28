import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [emailUser, setEmail] = useState('');
  const [userPass, setPass] = useState('');
  const login  = e =>{
    e.preventDefault();
    console.log(userLogin);
    console.log(userPass);
  }
  const _renderButton = () =>{
    console.log(emailUser, userPass);
    console.log(emailUser && emailUser.length >3 && userPass && userPass.length > 3);
    return emailUser && emailUser.length >3 && userPass && userPass.length > 3;
  }
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
            <form onSubmit={login}>
              <h4><label for="user">Usuario</label></h4>
              <input 
                type="mail" 
                id="user" 
                name="user" 
                autoComplete="off"
                value={emailUser}
                onChange={({target}) => setEmail(target.value)} 
              />
              <h4><label for="user">Contraseña + {emailUser}</label></h4>
              <input 
                type="password"
                id="pass" 
                name="pass" 
                value={userPass}
                onChange={({target}) => setPass(target.value)} />
                

              <div className={styles.options}>
                 <button><a href="recuperar-contraseña"><p>¡Accede!</p></a></button>
                
              </div>
            </form>  
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
