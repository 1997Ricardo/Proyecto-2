import "./Home.css";
import { cleanPage } from "../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    
    <h1>Ricardo Osuna</h1>
    <p> I’m a Full-Stack Developer trainee at The Power MBA with a DAM technical degree and a degree in Sports Sciences—plus master’s in Teaching, Performance, Nutrition, and Injury Readaptation, where I honed problem-solving and data-management skills. Since November 2022, I’ve led CrossFit & HIFT coaching at Culture Fitness Mijas, applying data-driven training and team leadership—abilities I transfer directly to managing IT projects. Fluent in Spanish and intermediate in English, I’m proficient with MySQL Workbench, VS Code, Git/GitHub, Trello/Notion, Figma and Google Workspace.
 </p>
    <a href="mailto:lionbeat.adm@gmail.com">Say hi →</a>
    </section>`;
};