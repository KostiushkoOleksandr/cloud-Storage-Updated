import SpinnerLogin from ".././SpinnerLogin";
import React from "react";
import LoginHeader from "../LoginHeader";
import Features from "../Features";
import Footer from "../Footer";

const LoginPage = (props) => {

    if (window.localStorage.getItem("token")) {
        props.loginWithToken()
    }

    return (

        <div>
            <LoginHeader/>

            {(window.localStorage.getItem("token") && !props.loginFailed) ?

                <div>

                    <div className="box-layout">

                        <div>
                            <SpinnerLogin/>
                        </div>
                    </div>


                </div>

                :

                <div>
                    <div className="box-layout">
                        <div className="box-layout__box">
                            <div className='logo-icon-form'>
                                <img className='login-icon' src="/images/logo-cloud.png" alt="image"/>
                            </div>
                            <div className='login-text'>
                                <h1 className='text'>
                                    <span className='span-text'>
                                        Вітаємо! Дуже раді вас бачити знову!
                                    </span>
                                </h1>
                                <p className='sub-text'>
                                    <span className='sub-text-title'>
                                        Увійдіть в обліковий запис, щоб переглянути свої хмарні дані.
                                    </span>
                                </p>
                            </div>
                            {/*<h1 className="box-layout__title">Cloud Storage</h1>*/}
                            <form onSubmit={props.login}>
                                <input className="box-layout__input" placeholder="Пошта" type="text"
                                       onChange={props.emailOnChange} value={props.state.email} ref={(ref) => {
                                    props.emailInput = ref
                                }}/>
                                <input className="box-layout__input" placeholder="Пароль" type="password"
                                       onChange={props.passwordOnChange} value={props.state.password} ref={(ref) => {
                                    props.passwordInput = ref
                                }}/>
                                {props.state.loginMode ? undefined :
                                    <input className="box-layout__input" placeholder="Підтвердьте пароль"
                                           type="password" onChange={props.verifyPasswordOnChange}
                                           value={props.state.verifyPassword} ref={(ref) => {
                                        props.passwordInput = ref
                                    }}/>
                                }
                                <button
                                    className="button box-layout--button">{props.state.loginMode ? "Авторизуватися" : "Створити"}</button>
                                <p className="box-layout__text"
                                   onClick={props.switchLoginMode}>{props.state.loginMode ? "Створити акаунт" : "Повернутися до авторизації"}</p>

                                {props.loginFailed ?

                                    <div className="login__image__wrapper">
                                        <img className="login__image" src="/images/error-red.png"/>
                                        <p className="login__title">{props.loginFailed}</p>
                                    </div>

                                    :

                                    undefined}

                            </form>
                        </div>
                    </div>
                </div>

            }
            <Features />
            <Footer />
        </div>

    )

}

export default LoginPage