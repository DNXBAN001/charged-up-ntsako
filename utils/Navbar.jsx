import Image from "next/image";
import Link from "next/link";
import { HiOutlineSearch } from "react-icons/hi";

export default function Navbar() {
  return (
    <div className="navbar-container">
        <div>
            <Link href="/">
                <Image 
                    src="/assets/images/logo.png"
                    width={90}
                    height={90}
                    alt="logo"
                />
            </Link>
        </div>
        <div className="nav-menu">
            <h3><Link href="/">Home</Link></h3>
            <h3><Link href="/">About</Link></h3>
            <h3><Link href="/">Contact Us</Link></h3>
            <h3><Link href="/">Shop</Link></h3>
            <h3><Link href="/">New</Link></h3>
            <h3><Link href="/">Sale</Link></h3>
        </div>
        <div className="search-signin">
            <form>
                <input 
                    name="search"
                    placeholder="search..."
                    className="search-field"
                />
                <div id="search-icon"><HiOutlineSearch id="icon" color="black"/></div>
            </form>
            <div>
                <Link href="/">Sign in</Link>
            </div>
        </div>
    </div>
  )
}
