import Card from "./Card"
import styles from './ShowCase.module.css'

const ShowCase = ({data}) => {
    // console.log("Showcase",data)
    return (
        <>
        {/* <h1>ShowCase</h1> */}
        <div className={styles.showCaseContainer}>
            {data.map((cardData) => (
                // {console.log("cardData", cardData)}
                <Card data = {cardData} key={cardData.id}/>
            ))}
        </div>
        </>
    )
}

export default ShowCase