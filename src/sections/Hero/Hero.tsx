import { useContext } from "react";
import "./Hero.Module.css";
import { ThemeContext } from "../../context/ThemeContext";

export default function Hero() {
  

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I’m Ria 👋</h1>
        <h2>.NET & Frontend Developer</h2>
      </div>
    </section>
  );
}