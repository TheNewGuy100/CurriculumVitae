import { GLOBALS } from "@enums/global.enum"
import Image from 'next/image'
import styles from './footer.module.css'

const FooterComponent = ({children}: any): any => {
    return (
        <>
            {children}
            <footer className={styles.footer}>
                <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                Powered by{' '}
                    <span className={styles.logo}>
                        <Image src={`${GLOBALS.basePath}/images/vercel.svg`} alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </>
    )
}

export default FooterComponent