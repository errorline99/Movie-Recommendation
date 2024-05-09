import Link from 'next/link';
import './Gone.css';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="yep">
      <nav>
      <div className="navbar">
        <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>  
          <div className="logo">
            <h1>Enjoy Movies</h1>
          </div>
          <div className="menu-items">
            <li><a href="/">Home</a></li>
            <li><a href="/components/new">Rated</a></li>
            <li><Link href="/search">Browse</Link></li>
          </div>
        </div>
      </div>
    </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}