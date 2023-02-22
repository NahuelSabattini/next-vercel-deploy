import NavBar from "components/Navbar";
import Head from "next/head";
import { FC } from "react";

interface Props{
    children: any
}

const MainLayaout: FC<Props> = ({children}) => {
    return ( 
        <>
            <Head>
                <title>Home - Aquio</title>
                <meta name="description" content="Home Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main className={''}>

                {children}

            </main>
        </>
     );
}
 
export default MainLayaout;