# Build and Deploy Guide

This document provides step-by-step instructions to:

- Set up and run your **React Vite** project locally
- Build and preview the project
- Deploy to **GitHub Pages**
- Configure **Cloudflare** for custom domains and SSL

## 1. Local Setup

Ensure you have the following installed:

- **Node.js** (LTS version recommended)
- **npm** (Comes with Node.js)
- **Git**

### Clone the repository

```bash
git clone https://github.com/prabesh-suwal/toothy-tales-and-tunes.git
cd toothy-tales-and-tunes
```

### Install dependencies

```bash
npm install
```

### Run the project locally

```bash
npm run dev
```

The project will be available at:

```bash
http://localhost:8080
```

### Preview the built project locally

1. Build the project:

```bash
npm run build
```

2. Preview the production build:

```bash
npm run preview
```

This previews the built project on `http://localhost:4173` (default port).

---

## 2. GitHub Pages Deployment

Ensure the following is correctly configured:

### Modify `vite.config.ts`

Ensure the `base` path is set for GitHub Pages deployment:

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/", 
}));
```

### Add GitHub Pages package

```bash
npm install gh-pages --save-dev
```

### Add deployment script in `package.json`

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
```

### Deploy to GitHub Pages

1. Build the project:

```bash
npm run build
```

2. Deploy to GitHub Pages:

```bash
npm run deploy
```

---

## 3. GitHub Configuration

1. Go to your repository on GitHub.
2. Navigate to **Settings > Pages**.
3. Select the branch as `gh-pages` and set the directory to `/ (root)`.
4. Save changes.
5. Ensure the website is accessible at:

   ```
   https://yourusername.github.io/toothy-tales-and-tunes/
   ```

6. Custom Domain Configuration (Optional):

   - Add `www.prakritibasukala.com.np` as the custom domain.
   - Ensure **Enforce HTTPS** is checked.

---

## 4. Cloudflare Configuration (for SSL and Custom Domain)

1. Go to **Cloudflare Dashboard** and select your domain.

2. **Add DNS Records**:

| Type | Name                   | Content                               | TTL  |
|------|------------------------|---------------------------------------|------|
| A    | @ (root)               | 185.199.108.153 (GitHub Pages IP)     | Auto |
| A    | @ (root)               | 185.199.109.153                       | Auto |
| A    | @ (root)               | 185.199.110.153                       | Auto |
| A    | @ (root)               | 185.199.111.153                       | Auto |
| CNAME| www                    | yourusername.github.io                | Auto |

3. **Enable Full (Strict) SSL**:

   - Go to **SSL/TLS > Overview**
   - Set SSL mode to **Full (Strict)**

4. **Page Rules** (Optional, to force HTTPS):

   - **If URL matches:** `prakritibasukala.com.np/*`
   - **Then the setting is:** Always use HTTPS

---

## 5. Accessing the Website

1. Main Domain:

   ```
   https://www.prakritibasukala.com.np
   ```

2. Root Domain (Redirected through Cloudflare):

   ```
   https://prakritibasukala.com.np
   ```

---

## 6. Troubleshooting

1. **If the page is blank after deployment:**

   - Ensure the `base` in `vite.config.ts` matches your repository name.
   - Clear browser cache or try in an incognito window.

2. **If SSL error occurs:**

   - Verify that Cloudflare DNS settings are correct.
   - Ensure Cloudflare SSL is set to **Full (Strict)**.

3. **For updates:**

   - After making changes, run:

     ```bash
     npm run deploy
     ```

   - This will rebuild and update the live site.

---

## 7. Summary Workflow

1. **Local Development:**

   ```bash
   npm run dev
   ```

2. **Build and Preview:**

   ```bash
   npm run build
   npm run preview
   ```

3. **Deploy to GitHub Pages:**

   ```bash
   npm run deploy
   ```

Ensure to verify both your main and root domains work seamlessly through **Cloudflare** and **GitHub Pages** integration.

