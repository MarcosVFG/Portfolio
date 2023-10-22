import Link from 'next/link';
import styles from './mainTwo.module.css';
import Image from 'next/image';

function MainTwo() {
    return (
        <div className={styles.main}>
            <h1>My Recent Work</h1>
            <div className={styles.mail}>
                <p>Here are a few past projects I've worked on. Want to see more?</p>
                <Link className={styles.link} href={'/'}>&nbsp;Email me</Link>
                <p>.</p>
            </div>
            <div className={styles.teste}>
                <div className={styles.imageContainer}>
                    <Link href={'/'}>
                        <Image     
                            src="/rep1.png"
                            width={350}
                            height={250}
                            className={styles.opa}
                            alt="Calculadora"
                        />
                        <div className={styles.overlay}>
                            <p>Calculadora IOS</p>
                        </div>   
                    </Link>
                </div>
                <div className={styles.imageContainer}>
                    <Link href={'/'}>
                        <Image     
                            src="/rep2.jpg"
                            width={350}
                            height={250}
                            className={styles.opa}
                            alt="Simbolo da NASA"
                        />
                        <div className={styles.overlay}>
                            <p>Picture of the day from NASA</p>
                        </div>   
                    </Link>
                </div>
                <div className={styles.imageContainer}>
                    <Link href={'/'}>
                        <Image     
                            src="/rep3.png"
                            width={350}
                            height={250}
                            className={styles.opa}
                            alt="Calculadora"
                        />
                        <div className={styles.overlay}>
                            <p>Calculator IOS</p>
                        </div>   
                    </Link>
                </div>
                <div className={styles.imageContainer}>
                    <Link href={'/'}>
                        <Image     
                            src="/rep3.png"
                            width={350}
                            height={250}
                            className={styles.opa}
                            alt="Calculadora"
                        />
                        <div className={styles.overlay}>
                            <p>Calculator IOS</p>
                        </div>   
                    </Link>
                </div>
                <div className={styles.imageContainer}>
                    <Link href={'/'}>
                        <Image     
                            src="/rep2.jpg"
                            width={350}
                            height={250}
                            className={styles.opa}
                            alt="Calculadora"
                        />
                        <div className={styles.overlay}>
                            <p>Calculator IOS</p>
                        </div>   
                    </Link>
                </div>
                <div className={styles.imageContainer}>
                    <Link href={'/'}>
                        <Image     
                            src="/rep1.png"
                            width={350}
                            height={250}
                            className={styles.opa}
                            alt="Calculadora"
                        />
                        <div className={styles.overlay}>
                            <p>Calculator IOS</p>
                        </div>   
                    </Link>
                </div>
            </div>
        </div>
    );
  }
  
  export default MainTwo;
  