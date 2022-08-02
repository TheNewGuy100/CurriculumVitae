import Head from "next/head"
import { GLOBALS } from "../../enums/global.enum"

const HeadInformationComponent = ({children}: any) => {
    return (
        <>
            <Head>
                <title>IGUATEMI 365 - ADMIN</title>
                <meta name="description" content="Home principal Iguatemi 365" />
                <link rel="shortcut icon" href={`${GLOBALS.basePath}/images/iguatemi365.ico`} />
            </Head>
            {children}
        </>
    )
}

export default HeadInformationComponent



