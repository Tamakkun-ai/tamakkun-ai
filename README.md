# TAMAKKUN AI - Portfolio Website

A beautiful one-page portfolio website for TAMAKKUN AI, an AI-powered Talent Acquisition outsourcing platform for the MENA region.

## 🚀 Features

- **Modern Next.js 14** with TypeScript
- **Tailwind CSS** for styling
- **Fully Responsive** design
- **Smooth Scrolling** navigation
- **One-Page Portfolio** with all key sections:
  - Hero Section
  - Problem Statement
  - Vision & Mission
  - Talent Intelligence Engine (9 assessment layers)
  - End-to-End Workflow
  - Business Impact
  - Competitive Advantage
  - Call-to-Action

## 📦 Tech Stack

- **Next.js 14.2** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 3.4** - Utility-first CSS
- **Vercel AI SDK** (configured for future use) - AI integrations

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm build

# Start production server
npm start
```

## 📁 Project Structure

```
tamakkun-ai/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Main page component
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Navbar.tsx      # Navigation bar
│       ├── Hero.tsx        # Hero section
│       ├── Problem.tsx     # Problem statement
│       ├── Vision.tsx      # Vision section
│       ├── TalentEngine.tsx # 9-layer assessment engine
│       ├── Workflow.tsx    # Process workflow
│       ├── BusinessImpact.tsx # Value proposition
│       ├── CompetitiveAdvantage.tsx # Competitive edge
│       ├── CTA.tsx         # Call-to-action
│       └── Footer.tsx      # Footer component
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## 🎨 Customization

- **Colors**: Edit `tailwind.config.ts` to change the primary color scheme
- **Content**: Update component files in `src/components/`
- **Metadata**: Modify SEO metadata in `src/app/layout.tsx`

## 🔮 Future AI Integration

The project is pre-configured with Vercel AI SDK dependencies:
- `ai` - Core AI SDK
- `@ai-sdk/openai` - OpenAI integration
- `@ai-sdk/anthropic` - Anthropic (Claude) integration
- `@ai-sdk/google` - Google (Gemini) integration

Ready to add AI features when needed!

## 📝 Next Steps

1. Install dependencies: `npm install`
2. Customize content and branding
3. Add your contact information
4. Deploy to Vercel or your preferred hosting platform

## 🚀 Deployment

Easiest deployment option is Vercel:

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

---

Built with ❤️ for TAMAKKUN AI
