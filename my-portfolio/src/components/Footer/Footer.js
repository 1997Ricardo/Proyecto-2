import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/icons/twitter.png", "Twitter")}
${Button("/public/github.jpeg", "GitHub")}
${Button("/icons/linkedin.jpeg", "LinkedIn")}
${Button("/icons/telegram.jpg", "Telegram")}
${Button("/icons/instagram.png", "Instagram")}
</div>
`;