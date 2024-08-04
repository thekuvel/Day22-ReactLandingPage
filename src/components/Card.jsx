import styles from './Card.module.css'

const Card = ({data}) => {
    console.log("card")
    return (
        <>
        <div className={styles.card}>
            <img className={ data.profile ? (styles.profileImg) : (styles.imageURL)} src={data.imageURL} alt="Image" />
            <h6>{data.title}</h6>
            <p>{data.description}</p>
        </div>
        </>
    )
}

export default Card