import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>

      <p>
        Feel free to reach out if you want to collaborate or just say hi 👋
      </p>

      <div className="contact-links">
        <a href="mailto:ria.hakefjall@gmail.com">Email</a>

        <a
          href="https://www.linkedin.com/in/hermi-sepriani-ria-hakefj%C3%A4ll-170429106/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a href="https://github.com/Ria0509" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>

      {/* optional form */}
      <form className="contact-form">
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <textarea placeholder="Your message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}