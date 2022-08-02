import '@enums/global.enum'

import styles from './index.module.scss'

import type { NextPage } from 'next'
import { useRef } from 'react'

const ContactsPage: NextPage = ({children}) => {

  const data = useRef(null);
  // REFERENCES EXAMPLE
  // let loginInputHTML = React.createRef<HTMLInputElement>()
  // let passwordInputHTML = React.createRef<HTMLInputElement>()
  // let keepMeLoggedInInputHTML = React.createRef<HTMLInputElement>()

  /* EVENT EXAMPLE */
  // let getUserInformation = (): LoginModel => {
  //   return {
  //     user: loginInputHTML.current!.value,
  //     password: passwordInputHTML.current!.value,
  //     keepMeLoggedIn: keepMeLoggedInInputHTML.current!.checked as unknown as boolean ? true : false,
  //   }
  // }

  // EVENT BUTTON EXAMPLE
  // let buttonLoginAnimationData = (): buttonClickEventAndAnimationModel => {
  //   return {
  //     buttonId: "logginButton",
  //     buttonStatusVariable: loginButtonStatus,
  //     timeDurationInMilliseconds: 300,
  //     divAnimation: styles.login_button_div_animation
  //   }
  // }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.align_box_content}>
          <div className={styles.cards_table}>

            <div className={styles.card_table_row}>
              <img src='/images/wumpus/wumpus_wave.webp'></img>
              <div>
                <h1>meu discord</h1>
              </div>
            </div>

            <div className={styles.card_table_row}>
              <img src='/images/wumpus/wumpus_wave.webp'></img>
              
            </div>

            <div className={styles.card_table_row}>
              <img src='/images/wumpus/wumpus_wave.webp'></img>
              <div>
                <h1>meu discord</h1>
              </div>
            </div>

            <div className={styles.card_table_row}>
              <img src='/images/wumpus/wumpus_wave.webp'></img>
              <div>
                <h1>meu discord</h1>
              </div>
            </div>

            <div className={styles.card_table_row}>
              <img src='/images/wumpus/wumpus_wave.webp'></img>
              <div>
                <h1>meu discord</h1>
              </div>
            </div>

            <div className={styles.card_table_row}>
              <img src='/images/wumpus/wumpus_wave.webp'></img>
              <div>
                <h1>meu discord</h1>
              </div>
            </div>

          </div>
        </div>
          <div id="embed-iframe"></div>

          {/* IFRAME DO GOOGLE */}
          <div itemRef='Transparent div' className={styles.transparent_background}>
            <div className={styles.map_box}>
              <iframe className={styles.iframebox} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d738.6032421812818!2d-54.265887490044925!3d-28.28593438116902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fe90a5cb6f7969%3A0x4eef42759b388927!2sR.%20Rodolfo%20Rogowski%2C%2067%20-%20Schirner%2C%20Santo%20%C3%82ngelo%20-%20RS%2C%2098803-210!5e0!3m2!1spt-BR!2sbr!4v1659037375267!5m2!1spt-BR!2sbr" allowFullScreen={true} loading="lazy" referrerPolicy={"no-referrer-when-downgrade"}></iframe>
            </div>
          </div>


          <div className={styles.information_div}>

          </div>
      </main>
      <script src="https://open.spotify.com/embed-podcast/iframe-api/v1" async></script>
    </>
  )
}

export default ContactsPage
