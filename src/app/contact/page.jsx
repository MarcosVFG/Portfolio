'use client'

import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Form from '../components/form';

export default function Contact() {
    return <div className={styles.main}>
        <div className={styles.teste}>
            <Link href={'/'}>
                <Image     
                    src="/logo.png"
                    width={100}
                    height={100}
                    className={styles.logo}
                    alt="Logo"
                />
            </Link>
        </div>
            <Image     
                src="/Perfil.png"
                width={137}
                height={149}
                className={styles.circleImage}
                alt="Marcos"
            />
        <h1 className={styles.tnks}>Thanks for taking the time to reach out.</h1>
        <h1 className={styles.tnks}>How can I help you today?</h1>
        <Form />
    </div>
}