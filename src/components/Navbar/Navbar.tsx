import "./Navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";


type Props = {
  active: string;
};

export default function Navbar({ active }: Props) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const theme = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme?.darkMode ? "dark" : "light"}`}>
      <div className="logo">Ria Hakefjäll</div>

      <ul className="nav-links">
        <li
          className={active === "hero" ? "active" : ""}
          onClick={() => scrollToSection("hero")}
        >
          Home
        </li>

        <li
          className={active === "about" ? "active" : ""}
          onClick={() => scrollToSection("about")}
        >
          About
        </li>

        <li
          className={active === "skills" ? "active" : ""}
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </li>

        <li
          className={active === "projects" ? "active" : ""}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </li>

        <li
          className={active === "contact" ? "active" : ""}
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </li>
      </ul>
      <button className="theme-toggle" onClick={theme?.toggleTheme}>
  {theme?.darkMode ? "☀️" : "🌙"}
</button>
    </nav>
  );
}