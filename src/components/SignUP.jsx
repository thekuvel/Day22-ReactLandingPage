import styles from "./SignUp.module.css";
// let img = "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-masthead.jpg";

function SignUP({data}) {
    return(
        <>
        <div className={data.header ? (styles.signUpContainer) : (styles.signUpContainerSmall)}>
            
            <div>
                <div className={styles.heading}>
                    <h1>{data.heading}</h1>
                </div>
                <div className={styles.userInput}>
                    <input type="text" placeholder="Email Address"/>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>

        </div>
        </>
    )
}

export default SignUP