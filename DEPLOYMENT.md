# Deployment Guide - TAMAKKUN AI

## 🚀 Recommended: Vercel (Best for Next.js)

Vercel is the **best choice** for Next.js applications because:
- ✅ Created by Next.js team - perfect optimization
- ✅ Zero-configuration deployment
- ✅ Free tier: 100GB bandwidth/month
- ✅ Automatic HTTPS & custom domains
- ✅ Edge network for fast global performance
- ✅ Perfect for Vercel AI SDK (when you add AI features)
- ✅ Preview deployments for every PR

### Quick Deploy to Vercel

#### Option 1: Via Vercel Dashboard (Easiest)
1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com)**
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Done!** Your site is live in ~2 minutes

#### Option 2: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (from project root)
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name? tamakkun-ai (or your choice)
# - Directory? ./
# - Override settings? No
```

### Custom Domain on Vercel
1. In Vercel dashboard → Project Settings → Domains
2. Add your custom domain (e.g., `tamakkun.ai`)
3. Follow DNS instructions
4. Automatic SSL certificate (free)

---

## 🎯 Alternative Options

### 1. Netlify
**Good alternative**, also excellent Next.js support:
- Free tier: 100GB bandwidth
- Easy GitHub integration
- Good performance

**Deploy:**
```bash
npm install -g netlify-cli
netlify deploy
netlify deploy --prod
```

Or connect GitHub repo at [netlify.com](https://netlify.com)

### 2. Cloudflare Pages
**Fast edge network**, good free tier:
- Free tier: Unlimited bandwidth
- Very fast global CDN
- Easy GitHub integration

**Deploy:** Connect GitHub at [pages.cloudflare.com](https://pages.cloudflare.com)

### 3. Railway
**Simple deployment**, good for startups:
- Easy setup
- Good pricing
- PostgreSQL support (if needed later)

**Deploy:** Connect GitHub at [railway.app](https://railway.app)

### 4. Render
**Reliable alternative**:
- Free tier available
- Easy setup
- Good for static + serverless

**Deploy:** Connect GitHub at [render.com](https://render.com)

---

## ✅ Pre-Deployment Checklist

Before deploying, make sure:

- [x] All dependencies are installed (`npm install`)
- [x] Project builds successfully (`npm run build`)
- [x] No linting errors (`npm run lint`)
- [x] Images are in `public/assets/` folder
- [x] `.gitignore` is configured
- [x] Code is committed to git

### Test Build Locally
```bash
# Build the project
npm run build

# Start production server
npm start

# Visit http://localhost:3000 to verify
```

---

## 🌐 Environment Variables (Future)

When you add AI features, you'll need environment variables:

**For Vercel:**
1. Go to Project Settings → Environment Variables
2. Add variables like:
   - `OPENAI_API_KEY=your-key`
   - `ANTHROPIC_API_KEY=your-key`
   - `GOOGLE_API_KEY=your-key`

**For local development:**
Create `.env.local` file:
```env
OPENAI_API_KEY=your-key-here
ANTHROPIC_API_KEY=your-key-here
GOOGLE_API_KEY=your-key-here
```

⚠️ **Never commit `.env.local` to git** (already in `.gitignore`)

---

## 📊 Performance Optimization

### Already Included:
- ✅ Next.js Image optimization (for logo when you add it)
- ✅ Tailwind CSS (purged automatically)
- ✅ TypeScript for type safety
- ✅ Production build optimizations

### Future Optimizations:
- Add `next/image` for logo images (when ready)
- Enable Image Optimization in `next.config.js`
- Consider adding analytics (Vercel Analytics is free)

---

## 🚦 Deployment Steps Summary

**Recommended Flow:**
1. **Commit & Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Ready for deployment"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to vercel.com
   - Import GitHub repository
   - Click Deploy
   - Get your live URL (e.g., `tamakkun-ai.vercel.app`)

3. **Add Custom Domain** (optional)
   - Project Settings → Domains
   - Add your domain
   - Update DNS records

4. **Done!** 🎉

---

## 🔄 Continuous Deployment

Once connected to GitHub:
- **Every push to `main`** → Auto-deploy to production
- **Every PR** → Auto-preview deployment
- **Zero downtime** deployments
- **Instant rollback** if needed

---

## 💡 My Recommendation

**Use Vercel** - It's perfect for your use case:
- ✅ Best Next.js optimization
- ✅ Free tier is generous
- ✅ Easy to use
- ✅ Perfect for future AI features
- ✅ Fast global CDN
- ✅ Great developer experience

Your site will be live in under 5 minutes! 🚀
