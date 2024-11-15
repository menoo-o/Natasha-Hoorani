import Image from "next/image"
import './nav.css'
import Link from "next/link"

export default function Navbar() {
  return (
    <>
        <nav>
            <div className="logo">
                <Image 
                    src='/4.jpg'
                    width={140}
                    height={145}
                    alt="logo"
                />    
            </div>    

            <div className="links">
                <Link href='/'>Home</Link>
                <Link href='/'>Shows</Link>
                <Link href='/'>Merch</Link>
                <Link href='/'>Blogs</Link>
                <Link href='/'>Contact</Link>
                <Link href='/'>About</Link>
            </div>
        </nav> 
    </>
  )
}
