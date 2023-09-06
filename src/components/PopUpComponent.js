import React from 'react';
import styles from './PopUp.module.css';

const PopUp = props => {
    // function that takes boolean as param to conditionally display popup
    const { setPopUp } = props

    return (
        <>
            <div className={styles['during-popup']}></div>
            <div className={styles['PopUpWrapper']}>
                <div className={styles['PopUp']}>
                    {/* x close window */}
                    <div className="pu-content-container">
                        <h1>{props.t("Thank you!")}</h1>
                        {props.t("Your message has been successfully sent, and we will get in touch as soon as possible.")}
                    </div>
                    {/* button controls */}
                    <div className={styles['pu-button-container']}>
                        <button className="global-button" onClick={() => setPopUp(false)} >{props.t("Close")}</button>
                    </div>
                </div>
            </div>

        </>

    );
}

export default PopUp;