# my-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Tokens

---

Tokens are names for style values used in Figma and transformed into CSS variables (or other format e.g. JS, SCSS). Transformation process is done with [Style Dictionary](https://github.com/amzn/style-dictionary)

<br>

### **Transformation**

1. Export tokens from Figma Tokens plugin to `figma-tokens.json` in location `src/assets/tokens/figma-tokens.json` and push to GitLab repository
   <br>

2. Transform `figma-tokens.json` from Figma format to Style Dictionary format with command

```
 npx token-transformer src/assets/tokens/figma-tokens.json src/assets/tokens/sd-tokens.json
```

3. Transform `sd-tokens.json` to CSS variables with command

```
node transform-tokens.js
```

<br>