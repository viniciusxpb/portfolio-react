import styles from './GlobalWrapper.module.css'

const GlobalWrapper = ({children,background}) => {

    if(background=='strong'){
        return (
            <div className={styles['GlobalWrapper']}>
                <div className={styles['GlobalWrapper__wrapper']}>
                    {children}
                </div>
            </div>
        )
    }else{
        return (
            <div className={styles['GlobalWrapper-strong']}>
                <div className={styles['GlobalWrapper__wrapper']}>
                    {children}
                </div>
            </div>
        )
    }
    
}

export default GlobalWrapper;