import Link from "next/link";

type props = {
    href: string, 
    text: string
}

const ActiveLink = ({href, text}:props) => {
    return ( 

        <Link legacyBehavior href={ href }>
            <a>{ text }</a>
        </Link>

     );
}
 
export default ActiveLink;