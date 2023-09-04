import styles from './TitleSection.module.css'

const TitleSection = ({title,children}) => {

    return (
        <div className={styles['TitleSection']}>
            <div className={styles['TitleSection__title']}>
                {title}
            </div>
            <div className={styles['TitleSection__body']}>
                {children}
            </div>
        </div>
    )
}

export default TitleSection;