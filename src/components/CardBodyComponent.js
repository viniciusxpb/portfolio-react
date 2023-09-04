import styles from './CardBody.module.css'

const CardBody = ({ children }) => {

    return (
        <div className={styles['CardBody']}>
                {children}
        </div>
    )
}

export default CardBody;