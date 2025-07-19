import { navLinks } from "../../constants";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="inner">
        <a className="logo" href="#hero">
          <div className="w-[150px] h-[150px]">
            <img src="/portfolio-logo.ico" alt="logo" className="h-full" />
          </div>
          <h2 className="sm:inline hidden">KARIM EL MANSOURI</h2>
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span className="md:text-lg text-sm">Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
