import styles from "./HeaderSection.module.css"

function HeaderSection(){
    
    return (
        <>
        <div className={`${styles.wrapper} container`}>
            <div className="row">
                <h3 className="col">Company Name</h3>
                <div className={`${styles.buttonCol} col`}>
                <button className={`${styles.button} btn btn-primary`}>Sign Up</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default HeaderSection