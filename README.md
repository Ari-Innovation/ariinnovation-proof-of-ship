<img src="./public/logo.svg" alt="Ari Health Logo" style="max-width: 200px; max-height: 200px;" /><br/><br/><br/>

# Development

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Vite (Builder)](https://vitejs.dev/guide/build.html)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Corepack](https://nodejs.org/api/corepack.html)
- [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm)
- [Tailwind CSS](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)

```bash
# pre-condition: removed any global installation of "yarn"
corepack enable
corepack prepare yarn@stable --activate
yarn install
```

## Environment Setup

1. Create a `.env.local` file in the root directory
2. Add the following environment variables:

```env
VITE_THIRDWEB_CLIENT_ID=your-thirdweb-client-id-here
```

You can obtain your Thirdweb Client ID by signing up at [Thirdweb Dashboard](https://thirdweb.com/dashboard).

### AI Integrations

Code editors like VSCode and Cursor, to name a few, allow documentation specific files to be integrated.

VS Code is already configured, but if you us other code editor, check the links below:

- [DaisyUI LLMs integration](https://daisyui.com/docs/editor/)

Reference Material: https://tkdodo.eu/blog/react-query-meets-react-router

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses
  [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and
[eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint
rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
