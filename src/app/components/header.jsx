import Link from "next/link";
import styles from './header.module.css';
import Image from "next/image";

function Header() {
    return (
      <header className={styles.main}>
        <Link href={'/'}>
          <Image     
            src="/logo.png"
            width={100}
            height={100}
            alt="Logo"
          />
        </Link>
        <div className={styles.container}>
          <Link className={styles.cv} href={"https://drive.google.com/file/d/1IXvgg2HkQAjSYE0AnXFtHUwyiU-ViAO2/view?usp=share_link"} target="_blank">Download CV</Link>
          <Link className={styles.contact} href={'/contact'}>Contato</Link>
        </div>
      </header>
    );
  }
  
  export default Header;
  