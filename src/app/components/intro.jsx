import styles from './intro.module.css';
import Image from "next/image";

function Intro() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <pre>Hi, i am </pre>
                <div className={styles.marcos}>
                    <h1 className={styles.marcos3}>Marcos Vinícius</h1>
                </div>
            </div>
            <p className={styles.full}>Full Stack developer</p>
                <Image     
                    src="/Perfil.png"
                    width={205}
                    height={223}
                    className={styles.circleImage}
                    alt="Marcos"
                />
        </div>
    );
  }
  
  export default Intro;
  