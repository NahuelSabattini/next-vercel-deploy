import Link from "next/link";
import ActiveLink from "./ActiveLink";
import styles from './navbar.module.css';

const NavBar = () => {

     const menuItems = [
          {
              text: 'Home',
              href: '/'
          },
          {
              text: 'About',
              href: '/about'
          },
          {
              text: 'Extra',
              href: '/new'
          },
          {
              text: 'Pricing',
              href: '/pricing'
          },
      ];


    return ( 
       <nav className={styles.menu}>
            { 
               menuItems.map((element)=>{
                    return <ActiveLink key={element.href} href={element.href} text={element.text} />
               })
            }

       </nav> 

       
     );
}
 
export default NavBar;