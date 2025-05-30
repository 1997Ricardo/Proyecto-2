import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/1920px-X_logo_2023.svg.png", "Twitter","https://x.com/ricardosuna_?s=21&t=t5cWmIsh7_0yRx3xo5Aq5g")}
${Button("https://images.thepowermba.com/production/3bb8bd63-3a15-48a1-9316-11bdbfff7345.png", "GitHub","https://github.com/1997Ricardo")}
${Button("https://images.thepowermba.com/production/1062aefa-bfdf-4272-9f7d-a7e8eaa62338.png", "LinkedIn","https://www.linkedin.com/in/ricardo-osuna-rodr%C3%ADguez-a48219227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app")}
${Button("https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1920px-Telegram_2019_Logo.svg.png", "Telegram")}
${Button("https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1920px-Instagram_logo_2022.svg.png", "Instagram","https://www.instagram.com/lionbeat__?igsh=cWhwOW41ajY5NXNu&utm_source=qr")}
</div>
`;