import styles from './InfoBox.module.css'

const InfoBox = ({data}) => {
    if(data.imageURL){
        return (
            <>
            <div className={styles.imagebox}>
                <img src={data.imageURL} alt="" />
            </div>
            </>
        )
    }

    return (
    
        <div className={styles.textBox}>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </div>
        

    )
}

export default InfoBox