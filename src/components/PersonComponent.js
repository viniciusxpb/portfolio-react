import styles from './Person.module.css'
import Vinicius from "./../assets/vinicius.png";
import { Trans } from 'react-i18next'


const Person = ({ children }) => {

    return (
        <div className={styles['Person']}>
            <div className={styles['Person__content']}>
                <div className={styles['Person__textBox']}>

                    <div className={styles['Person__h1']}><Trans>Hello my name is</Trans></div>
                    <div className={styles['Person__h2']}>Vinícius França</div>
                    <div className={styles['Person__CodeStyle']}>&lt;Full-Stack Developer&gt;</div>
                    <div className={styles['Person__h4']}>
                        <Trans>Introduction</Trans>
                    </div>

                </div>
                <div className={styles['Person__imgBox']}>
                    <img src={Vinicius} alt='me' />
                </div>
            </div>
        </div>
    )
}

export default Person;