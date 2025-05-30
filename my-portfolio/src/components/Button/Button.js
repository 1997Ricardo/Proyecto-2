import "./Button.css";

export const Button = (icon, text, url) => `
  <a 
    href="${url}" 
    target="_blank" 
    rel="noopener noreferrer" 
    class="btn-link"
  >
    <button class="my-btn">
      <img src="${icon}" alt="${text} icon" class="my-btn__icon" />
      <span class="my-btn__text">${text}</span>
    </button>
  </a>
`;