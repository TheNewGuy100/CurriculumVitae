import type { NextPage } from 'next'
import '@enums/global.enum'
import styles from './welcome.module.scss'
import { buttonClickEventAndAnimationModel, WelcomePageScripts } from '../../src/components/pages/welcome.scripts'
import { LoginModel } from 'src/models/global.models'
import React from 'react'

const WelcomePage: NextPage = ({children}) => {
  let loginInputHTML = React.createRef<HTMLInputElement>()
  let passwordInputHTML = React.createRef<HTMLInputElement>()
  let keepMeLoggedInInputHTML = React.createRef<HTMLInputElement>()
  
  let loginButtonStatus = false;

  let getUserInformation = (): LoginModel => {
    return {
      user: loginInputHTML.current!.value,
      password: passwordInputHTML.current!.value,
      keepMeLoggedIn: keepMeLoggedInInputHTML.current!.checked as unknown as boolean ? true : false,
    }
  }

  let buttonLoginAnimationData = (): buttonClickEventAndAnimationModel => {
    return {
      buttonId: "logginButton",
      buttonStatusVariable: loginButtonStatus,
      timeDurationInMilliseconds: 300,
      divAnimation: styles.login_button_div_animation
    }
  }

  return (
    <>
      <main>
        <div itemRef='background_image' className={styles.background_image}>
          <div itemRef="right_side_menu_box" className={styles.background_menu_box}>
            <div itemRef='width_and_height_control' className={styles.max_width_control_sidebox_content}>
              <h1 className={`${styles.title}`}>
                <a>IGUATEMI</a>
                <a className={styles.title_number}>365</a>
              </h1>
              <h2 className={styles.subtitle}>BEM-VINDO AO ADMINISTRADOR DO <br></br> APP IGUATEMI 365.</h2>

              <div style={{margin: "12vh", maxWidth:"300px"}}>

                  <input type="text" ref={loginInputHTML} className={styles.input_text_login} id="login_user_data" placeholder="USUÁRIO*" aria-label="Username" aria-describedby="basic-addon1"></input>
                    <br></br>
                  <input type="password" ref={passwordInputHTML} className={styles.input_text_login} id="login_password_data" placeholder="SENHA*" aria-label="Username" aria-describedby="basic-addon1"></input>

                  <div className={`${styles.checkbox_keep_logged_in_div} form-check`}>
                    <input ref={keepMeLoggedInInputHTML} className={`form-check-input ${styles.checkbox_keep_logged_in}`} id="login_keepMeLoggedIn_data" type="checkbox" value="false"></input>
                    <label className={`${styles.checkbox_keep_logged_in_text} form-check-label`}>
                      DEIXE-ME LOGADO
                    </label>
                  </div>


                  <div className={styles.login_button_div} id="logginButton" onClick={() => WelcomePageScripts.loginUserWithButtonAnimation(getUserInformation(), buttonLoginAnimationData())}>
                  <button className={`${styles.login_button} btn-primary"`} type="button">ENTRAR</button>
                </div>
                <div className={styles.forgotten_password_div}>
                  <a className={`${styles.forgotten_password_button}`} href="/passwordRecover" type="button">ESQUECEU A SENHA?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default WelcomePage
