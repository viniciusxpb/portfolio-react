import styles from './CardHeader.module.css'

const CardHeader = ({ iconLetter,p1,p2,p3 }) => {

    return (
        <div className={styles['CardHeader']}>
                <div className={styles['CardHeader__circle']}>
                    {iconLetter}
                </div>
                <div>
                    <h1 className={styles['CardHeader__h1']}>
                        {p1}
                    </h1>
                    <h2 className={styles['CardHeader__h2']}>
                        {p2}
                    </h2>
                    <h3 className={styles['CardHeader__h3']}>
                        {p3}
                    </h3>
                </div>
        </div>
    )
}

export default CardHeader;