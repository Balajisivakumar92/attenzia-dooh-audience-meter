## Setup

**Prerequisites:** Node.js (v18 or higher)

1. Install dependencies:
   ```bash
   npm install
   ```
---

## Development

### Run the app locally:
```bash
npm run dev
```
- Starts the development server with hot module replacement (HMR)
- Opens the app in your browser at `http://localhost:5173`
- Changes to your code will automatically refresh the browser
- Use this for development and testing

---

## Deployment

### Build and deploy to GitHub Pages:
```bash
npm run deploy
```

This command:
1. Builds your application (`npm run build`)
2. Creates optimized production files in the `dist/` folder
3. Deploys to GitHub Pages using the gh-pages package
4. Your site will be live at: `https://Balajisivakumar92.github.io/attenzia-dooh-audience-meter`

**Note:** After running `npm run deploy`, push your source code changes to GitHub:
```bash
git push
```

---

## Additional Commands

- `npm run build` - Build the project for production without deploying
- `npm run preview` - Preview the production build locally
