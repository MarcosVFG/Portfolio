import styles from './mainOne.module.css';
import Image from "next/image";

function MainOne() {
    return (
      <div>
        <div className={styles.main}>
            <Image     
                src="/fundo.svg"
                width={723}
                height={513}
                className={styles.s}
                alt="Livros e computadores"
            />
        </div>
        <div className={styles.divP}>
            <h1>About Me</h1>
            <p>I'm a Junior Full-Stack Developer specializing in React.js, JavaScript, HTML, and CSS for front-end work, and Node.js for back-end development. I'm an aspiring Java developer eager to expand my skills. I'm dedicated to creating clean, maintainable code and thrive in dynamic development environments. Excited to contribute to meaningful projects and continue my growth as a full-stack developer.</p>
        </div>
        <div className={styles.teste}>
            <div className={styles.box}>
                <div className={styles.containerOne}>
                    <div className={styles.bcIcon}>
                        <Image     
                            src="/front.png"
                            width={50}
                            height={50}
                            className={styles.icon}
                            alt="Computador front-end"
                        />
                    </div>
                    <h1>Front End</h1>
                    <p>My mission as a Front-End Developer is to craft engaging and user-friendly web experiences.</p>
                    <p className={styles.tec}>Technologies</p>
                    <p>HTML, CSS, JavaScript, TypeScript, React, Next.js</p>
                    <p className={styles.skills}>Skills</p>
                    <p className={styles.skillsP}>Responsive Layout</p>
                    <p className={styles.skillsP}>UI/UX Design</p>
                    <p className={styles.skillsP}>SOA</p>
                    <p className={styles.skillsP}>Page Experience</p>
                </div>
                <div className={styles.containerTwo}>
                    <div className={styles.bcIconTwo}>
                        <Image     
                            src="/back.png"
                            width={50}
                            height={50}
                            className={styles.iconTwo}
                            alt="Engrenagem back-end"
                        />
                    </div>
                    <h1>Back End</h1>
                    <p>My mission as a Back-End Developer is to build robust and efficient server-side solutions.</p>
                    <p className={styles.tec}>Technologies</p>
                    <p>Java, NodeJS, MySQL, MongoDB</p>
                    <p className={styles.skills}>Skills</p>
                    <p className={styles.skillsP}>APIs</p>
                    <p className={styles.skillsP}>GIT</p>
                    <p className={styles.skillsP}>Scalability</p>
                    <p className={styles.skillsP}>Integration</p>
                </div>
                <div className={styles.containerThree}>
                    <div className={styles.bcIconThree}>
                        <Image     
                            src="/mobile.png"
                            width={50}
                            height={50}
                            className={styles.iconThree}
                            alt="Celular"
                        />
                    </div>
                    <h1>Mobile</h1>
                    <p>My mission as a Mobile Developer is to create innovative and user-centric mobile applications.</p>
                    <p className={styles.tec}>Technologies</p>
                    <p>Java, JavaScript, React Native</p>
                    <p className={styles.skills}>Skills</p>
                    <p className={styles.skillsP}>Adaptability</p>
                    <p className={styles.skillsP}>Creativity</p>
                    <p className={styles.skillsP}>Application Publishing</p>
                    <p className={styles.skillsP}>Optimization</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default MainOne;