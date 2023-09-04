import styles from './SBlock.module.css'

const SBlock = ({value}) => {

    return (
        <div className={styles['SBlock']}>
            {value}
        </div>
    )
}

export default SBlock;