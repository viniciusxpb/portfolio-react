import styles from './CardFooter.module.css'

const CardFooter = ({ children }) => {

    return (
        <div className={styles['CardFooter']}>
            {children}
        </div>
    )
}

export default CardFooter;