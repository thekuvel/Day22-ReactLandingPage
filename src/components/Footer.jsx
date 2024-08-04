import styles from './Footer.module.css'
const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div>
                <div>
                    <a href="">About</a>
                    <a href="">Contact Us</a>
                    <a href="">Tearms of Use</a>
                    <a href="">Privacy Policy</a>
                </div>
                <p>© Your Website 2023. All Rights Reserved.</p>
            </div>
            <div className={styles.socialHandle}>
                <i class="fa-brands fa-facebook fs-3" style={{color: "#B197FC",}}></i>
                <i class="fa-brands fa-twitter fs-3" style={{color: "#B197FC",}}></i>
                <i class="fa-brands fa-instagram fs-3" style={{color: "#B197FC",}}></i>
            </div>
        </div>
    )
}

export default Footer