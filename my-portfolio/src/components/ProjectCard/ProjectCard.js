import "./ProjectCard.css";

export const ProjectCard = (project) => `
<div class="project-card">
<img src=${project.image} alt=${project.title}/>
<div class="header">
<h2>${project.title}</h2>
<div>
<a href=${project.github}>
<img src="https://images.thepowermba.com/production/3bb8bd63-3a15-48a1-9316-11bdbfff7345.png" alt="GitHub Icon" />
</a>
<a href=${project.link}>
<img src="https://images.thepowermba.com/production/99a47580-1bf4-41be-9122-58f46e400a34.png" alt="Link icon" />
</a>
</div>
</div>

<div class="detail">
<p>${project.description}</p>
<p class="tech">${project.tech.join(" - ")}</p>
</div>
</div>
`;