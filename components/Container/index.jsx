import Navbar from "../Navbar"
import Footer from "../Footer"
import styles from "../../styles/Container.module.css"

export default function Container({children}){
    return(
    <>
        <Navbar />
        <main className={styles.container}>        
            {children}
        </main>
        <Footer />
    </>
    )
}
