import styles from './Info.module.css'
import InfoBox from './InfoBox'


const Info = ({data}) => {
    return (
        <div className={styles.container}>
        {data.map((infoData)=>(
            <InfoBox data = {infoData}/>
        ))}
        
        </div>
    )
}

export default Info