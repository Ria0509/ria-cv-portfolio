import "./Skills.css";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Vite",
      ],
    },

    {
      title: "Backend",
      skills: [
        "C#",
        ".NET",
        "ASP.NET",
        "MVC",
        "REST API",
      ],
    },

    {
      title: "Database & DevOps",
      skills: [
        "MS SQL",
        "Azure DevOps",
        "Git & GitHub",
      ],
    },

    {
      title: "API & State Management",
      skills: [
        "TanStack Query",
        "Axios",
        "REST API Integration",
      ],
    },

    {
      title: "AI & Creative Tools",
      skills: [
        "Canva",
        "Filmora",
        "Suno",
        "Leonardo AI",
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-category">
            <h3>{category.title}</h3>

            <div className="skills-grid">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-card">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}