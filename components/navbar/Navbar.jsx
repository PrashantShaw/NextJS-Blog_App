import Link from 'next/link'
import { useRouter } from 'next/router'
import { NAVBAR_ITEMS } from '../../constants/navbarItems'

const NavItem = ({ item, active }) => {
    return <>
        <li className={active ? 'active' : ''}>
            <Link href={item.link}>{item.name}</Link>
        </li>
    </>
}

const Navbar = () => {
    const router = useRouter()
    // console.log('Navbar loaded - ', router)
    
    const path = router.asPath
    function isActive(link) {
        if (link === '/') {
            return path === '/'
        }
        else {
            return path.startsWith(link)
        }
    }

    return (
        <nav className='navbar-wrapper'>
            <ul>
                {NAVBAR_ITEMS
                    .map((item, idx) => {
                        const active = isActive(item.link)
                        return <NavItem key={idx} item={item} active={active} />
                    })
                }
            </ul>
        </nav>
    )
}

export default Navbar