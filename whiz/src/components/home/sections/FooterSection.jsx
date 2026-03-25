const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/whizrobo',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" focusable="false">
        <path d="M13.545 21.86V13.87h3.09l.45-3.47h-3.54V7.24c0-1 0.28-1.69 1.73-1.69h1.85V2.47a25.3 25.3 0 0 0-2.75-.14c-2.72 0-4.58 1.66-4.58 4.72v2.64H8.28v3.47h2.86v7.99h2.38Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/whizrobo',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" focusable="false">
        <path d="M7.75 2h8.5C19.2 2 22 4.8 22 8.75v8.5C22 19.2 19.2 22 16.25 22h-8.5C4.8 22 2 19.2 2 16.25v-8.5C2 4.8 4.8 2 7.75 2Zm8.5 1.5h-8.5A2.25 2.25 0 0 0 5.5 5.75v8.5A2.25 2.25 0 0 0 7.75 16.5h8.5A2.25 2.25 0 0 0 18.5 14.25v-8.5A2.25 2.25 0 0 0 16.25 3.5Zm-4.25 3a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5-2.25a0.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/whizrobo',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" focusable="false">
        <path d="M21.8 8.5a2.76 2.76 0 0 0-1.94-2A47.1 47.1 0 0 0 12 6.1a47.1 47.1 0 0 0-7.86.4 2.76 2.76 0 0 0-1.94 2 28.57 28.57 0 0 0-.5 5.47 28.57 28.57 0 0 0 .5 5.47 2.76 2.76 0 0 0 1.94 2 47.1 47.1 0 0 0 7.86.4 47.1 47.1 0 0 0 7.86-.4 2.76 2.76 0 0 0 1.94-2 28.57 28.57 0 0 0 .5-5.47 28.57 28.57 0 0 0-.5-5.47Zm-12.8 8.5V7.5l6.5 4.5Z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/918968714000',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" focusable="false">
        <path d="M17.472 14.425c-.297-.148-1.758-.867-2.031-.967-.273-.1-.472-.148-.672.149s-.771.967-.947 1.165c-.173.198-.348.223-.645.075-1.758-.867-2.908-1.544-4.073-3.494-.309-.532.309-.495.892-1.644.099-.225.05-.421-.025-.569-.075-.148-.672-1.612-.921-2.213-.243-.579-.49-.5-.672-.51-.173-.008-.372-.01-.571-.01s-.569.084-.868.41c-.297.297-1.135 1.11-1.135 2.707 0 1.597 1.161 3.145 1.322 3.36.173.223 2.288 3.49 5.545 4.894.776.333 1.379.531 1.849.68.776.249 1.482.214 2.041.13.623-.094 1.758-.719 2.007-1.414.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.572-.347Z" />
      </svg>
    ),
  },
]

function FooterSection({ onBookDemoClick = () => {} }) {
  return (
    <footer className="footer" id="contact">
      <div className="footer-col">
        <h4>About Whizrobo</h4>
        <p>
          WHIZROBO established in 2016 with a vision to introduce STEM education through Robotics for
          students across the globe to step into the World of Technology. Our Founder Mrs. Dimple Verma,
          a visionary, believes in “Learning by Doing”.
        </p>
        <div className="footer-social" aria-label="Whizrobo social links">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.href} target="_blank" rel="noreferrer" aria-label={link.name}>
              <span className="sr-only">{link.name}</span>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/#features">Solutions</a></li>
          <li><a href="/robotics">Robots</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/#about">About Us</a></li>
          <li>
            <button className="footer-link-btn" type="button" onClick={onBookDemoClick}>
              Book Demo
            </button>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Services</h4>
        <ul>
          <li>Labs</li>
          <li>Structured Curriculum</li>
          <li>Robotic Kits</li>
          <li>Teacher Training</li>
          <li>WHIZFLIX (LMS)</li>
          <li>Competitions</li>
          <li>Workshops</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Contact</h4>
        <p>
          Phone: +91 89687 14000, +91 94642 14000
        </p>
        <p>Email: info@whizrobo.com</p>
        <p>Website: www.whizrobo.com</p>
        <p>Head Office: 14 D Kitchlu Nagar, Ludhiana</p>
        <p>Regd Office: Emerald Plaza, Sector-65, Gurgaon</p>
      </div>
    </footer>
  )
}

export default FooterSection


