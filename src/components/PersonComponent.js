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

                    <a target='_blank' rel='noopener noreferrer' href="https://wa.me/5534991315726">
                        <button type="submit" className='global-button'><Trans>Let's talk</Trans></button>
                    </a>

                </div>
                <div className={styles['Person__imgBox']}>
                    <img className={styles['Person__image']} src={Vinicius} alt='me' />
                </div>
            </div>
        </div>
    )
}

export default Person;