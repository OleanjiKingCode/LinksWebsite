import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Oleanji Links Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-3'> </div>
              <div className='col-md-6 d-flex align-items-center' style={{flexDirection:'column', color:"white"}}>
                <div className={styles.image}>
                  <Image src='/IMG_9965.jpg'  width={240} height ={210}/>
                </div>
                <div className='d-flex align-items-center ' style={{justifyContent:"space-around"}}>
                <h3>
                   Hey
                </h3>
                <img src="/icons8-so-so-96.png"  className={styles.pad} />
                <h1>
                    I  AM  ADEBAYO 
                </h1>
               
                
                </div>
                <p style={{fontSize:"19px"}}>
                    Web3 Developer | Solidity and Dapps | Helping people on thier web3 journey
                </p>
            </div>
          </div>
          <div className='row py-3'>
            <div className='col-md-3 d-flex justify-content-center'>
              <div className={styles.Boxes}>
              <div className={styles.overlay}> </div>
                <Link href="https://twitter.com/Oleanji_sol" passHref >
                  <a target="_blank">
             
                <div className={styles.n}>
                  <Image src='/icons8-twitter-96.png' className={styles.picc} width={96} height={96}/>
                </div>
               
                  
                
                </a>
                </Link> 
                <p>
                 Twitter
                </p> 
              </div>
             
            </div>

            <div className='col-md-3 d-flex justify-content-center'>
              <div className={styles.Boxes}>
              <div className= {styles.overlay}> </div>
              <Link href="https://github.com/OleanjiKingCode" passHref >
                  <a target="_blank">
                <div>
                  <img src='/icons8-github-96.png' className={styles.picc} width={96} height={96}  />
                </div>
                </a>
                </Link> 
                <p>
                   
                  Gihub
                </p>  
              </div>
            </div>

            <div className='col-md-3 d-flex justify-content-center'>
              <div className={styles.Boxes}>
              <div className= {styles.overlay}> </div>
              <Link href="https://twitter.com/Oleanji_sol" passHref >
                  <a target="_blank">
                <div>
                  <img src='/icons8-website-96.png' className={styles.picc} width={96} height={96}/>
                </div>
                </a>
                </Link> 
                <p>
                   
                  Website
                </p>  
              </div>
            </div>

            <div className='col-md-3 d-flex justify-content-center'>
              <div className={styles.Boxes}>
                 <div className= {styles.overlay}> </div>
                 <Link href="https://twitter.com/Oleanji_sol" passHref >
                  <a target="_blank">
                <div>
                  <img src='/icons8-resume-64.png' className={styles.picc} width={64} height={64}/>
                </div>
                </a>
                </Link> 
                <p>
                   
                  Download Resume
                </p>  
              </div>
            </div>
          </div>
         <div 
          className='row'>
            <div className='col-md-3 d-flex justify-content-center'>
                <div className={styles.Boxes1}>
                <div className= {styles.overlay}> </div>
                <Link href="https://twitter.com/Oleanji_sol" passHref >
                  <a target="_blank">
                  <div>
                    <img src='/icons8-discord-96.png' className={styles.picc} width={96} height={96}/>
                  </div>
                  </a>
                </Link> 
                  <p>
                     
                    Discord
                  </p>  
                </div>
              </div>
              <div className='col-md-3 d-flex justify-content-center'>
                <div className={styles.Boxes}>
                   <div className= {styles.overlay}> </div>
                   <Link href="https://twitter.com/Oleanji_sol" passHref >
                  <a target="_blank">
                  <div>
                    <img src='/icons8-linkedin-color-96.png' className={styles.picc} width={96} height={96}/>
                  </div>
                  </a>
                </Link> 
                  <p>
                     
                    LinkedIn
                  </p>  
                </div>
              </div>
              <div className='col-md-3 d-flex justify-content-center'>
                <div className={styles.Boxes}>
                   <div className= {styles.overlay}> </div>
                   <Link href="https://twitter.com/Oleanji_sol" passHref >
                  <a target="_blank">
                  <div>
                    <img src='/icons8-telegram-app-96.png' className={styles.picc} width={96} height={96}/>
                  </div>
                  </a>
                </Link> 
                  <p>
                     
                   Telegram
                  </p>  
                </div>
              </div>
              <div className='col-md-3 d-flex justify-content-center'>
                <div className={styles.Boxes}>
                <div className= {styles.overlay}> </div>
                <Link href="https://twitter.com/Oleanji_sol" passHref >
                  <a target="_blank">
                  <div>
                    <img src='/icons8-mail-96.png' className={styles.picc} width={96} height={96}/>
                  </div>
                  </a>
                </Link> 
                  <p>
                     
                    Mail
                  </p>  
                </div>
              </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
        <p className={styles.textfoot}>
          Copywright 2022  &copy; | Oleanji
        </p>
      </footer>
    </div>
  )
}
