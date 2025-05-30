import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/1920px-X_logo_2023.svg.png", "Twitter","https://x.com/ricardosuna_?s=21&t=t5cWmIsh7_0yRx3xo5Aq5g")}
${Button("/public/github.jpeg", "GitHub","https://github.com/1997Ricardo")}
${Button("/public/linkedin.jpeg", "LinkedIn","https://www.linkedin.com/in/ricardo-osuna-rodr%C3%ADguez-a48219227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app")}
${Button("/public/telegram.jpg", "Telegram")}
${Button("/public/instagram.png", "Instagram","https://www.instagram.com/lionbeat__?igsh=cWhwOW41ajY5NXNu&utm_source=qr")}
</div>
`;