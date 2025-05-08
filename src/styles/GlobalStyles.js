import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    /* Color Palette */
    --primary-color: #1f1f1f;
    --secondary-color: #2d2d2d;
    --accent-color: #8ab4f8;
    --background-color: #171717;
    --text-color: #ffffff;
    --text-secondary: #9aa0a6;
    
    /* Additional Colors */
    --success-color: #4caf50;
    --error-color: #f44336;
    --warning-color: #ff9800;
    --info-color: #2196f3;
    
    /* Gradients */
    --primary-gradient: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    --accent-gradient: linear-gradient(135deg, var(--accent-color) 0%, #6d9ee8 100%);
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --section-spacing: 6rem;
    
    /* Typography */
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-md: 1rem;
    --font-size-lg: 1.25rem;
    --font-size-xl: 1.5rem;
    --font-size-2xl: 2rem;
    
    /* Layout */
    --border-radius: 12px;
    --border-radius-sm: 6px;
    --border-radius-lg: 16px;
    --container-width: 1200px;
    
    /* Effects */
    --transition: all 0.3s ease;
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Google Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
    font-size: var(--font-size-md);
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
    font-size: var(--font-size-md);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    line-height: 1.2;
  }

  h1 { font-size: var(--font-size-2xl); }
  h2 { font-size: var(--font-size-xl); }
  h3 { font-size: var(--font-size-lg); }

  ::selection {
    background-color: var(--accent-color);
    color: var(--background-color);
  }
`;

export default GlobalStyles;
