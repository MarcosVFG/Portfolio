import styles from './footer.module.css';
import Image from "next/image";
import Link from 'next/link';

function Footer() {
    return (
        <div className={styles.main}>
            <footer className={styles.footer}>
                <div className={styles.contact}>
                    <h1>Contact me</h1>
                    <p>Interested in working together? Send me a message!</p>
                    <div className={styles.hello}>
                        <Link href={'/contact'} className={styles.link}>
                            <Image     
                                src="/hello.png"
                                width={30}
                                height={30}
                                className={styles.icon}
                                alt="Mão de olá"
                            />
                            <p className={styles.para}>Hello!</p>
                        </Link>
                    </div>
                </div>
                <div className={styles.wrapper}>
                        <div className={styles.helloTwo}>
                            <Link href={"https://www.linkedin.com/in/marcosvfg/"} target="_blank" className={styles.linkTwo}>
                                <Image     
                                    src="/inBranco.png"
                                    width={30}
                                    height={30}
                                    className={styles.hehe}
                                    alt="Linkedin Logo"
                                />
                            </Link>
                        </div>
                    <div className={styles.helloTwo}>
                        <Link href={"https://github.com/MarcosVFG"} target="_blank" className={styles.linkTwo}>
                            <Image     
                                src="/gith.svg"
                                width={30}
                                height={30}
                                className={styles.hehe}
                                alt="Github Logo"
                            />
                        </Link>
                    </div>
                    <div className={styles.helloTwo}>
                        <Link href={"mailto:marcosvfrontend@gmail.com"} target="_blank" className={styles.linkTwo}>
                            <Image     
                                src="/mail.png"
                                width={30}
                                height={30}
                                className={styles.hehe}
                                alt="Email Logo"
                            />
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
  }
  
  export default Footer;
  