# Hopefield Radio Website

Welcome to your Hopefield Radio website! This guide will help you customize and maintain your site.

## Quick Start Guide

### Downloading Your Code
1. Click the three dots (•••) in the top right corner of the code preview
2. Select "Download ZIP" to get all your code
3. Or click the GitHub icon to push directly to a GitHub repository

### Deploying to HopefieldRadio.com
1. Click the "Publish" button in the top right
2. Your site will deploy to Vercel
3. In Vercel dashboard, go to Project Settings → Domains
4. Add your domain: `hopefieldradio.com`
5. Follow the DNS instructions provided by Vercel

## Customization Guide

### 1. Updating Music Playlist

**File:** `config/playlist.ts`

To add or change songs:
\`\`\`typescript
export const playlist = [
  {
    id: 1,
    title: "Gospel Lofi Mix",
    artist: "Hopefield Radio",
    src: "/audio/hopefield-radio-music.mp3",
  },
  {
    id: 2,
    title: "Your New Song",
    artist: "Artist Name",
    src: "/audio/your-new-song.mp3",
  },
]
\`\`\`

**Steps:**
1. Add your audio files to the `public/audio/` folder
2. Add a new entry to the playlist array
3. The player will automatically show skip buttons when you have multiple tracks

### 2. Updating Popup Messages

**File:** `config/popups.ts`

To add or edit popups:
\`\`\`typescript
// For text-based popups (quotes, Bible verses):
{
  id: 17,
  type: "bible verse", // or "quote", "fun fact", "owner story"
  content: "Your quote or verse text here",
  author: "Author Name",
  link: "/about", // Where the "Learn more" button goes
}

// For image-based popups:
{
  id: 18,
  type: "owner story",
  content: "Caption for your image",
  image: "/images/your-photo.jpg", // Add images to public/images/
  link: "/about",
}
\`\`\`

### 3. Connecting Your Shopify Store

**File:** `components/floating-nav.tsx` (line ~50)

Replace the placeholder URL with your actual Shopify store:
\`\`\`typescript
<a
  href="https://your-actual-store.myshopify.com"
  target="_blank"
  rel="noopener noreferrer"
  ...
>
  SHOP
</a>
\`\`\`

### 4. Customizing Menu Pages

Your menu pages are located in the `app/` folder:
- `app/books/page.tsx` - Books page
- `app/music/page.tsx` - Music page
- `app/podcasts/page.tsx` - Podcasts page
- `app/marriage/page.tsx` - Marriage page
- `app/about/page.tsx` - About page
- `app/contact/page.tsx` - Contact page

Each page follows this structure:
\`\`\`typescript
export default function PageName() {
  return (
    <div className="min-h-screen bg-background">
      {/* Your content here */}
    </div>
  )
}
\`\`\`

## File Structure

\`\`\`
hopefield-radio/
├── app/                    # All pages
│   ├── page.tsx           # Homepage
│   ├── books/page.tsx     # Books page
│   ├── music/page.tsx     # Music page
│   └── ...
├── components/            # Reusable components
│   ├── floating-nav.tsx   # Navigation menu
│   ├── music-player.tsx   # Music player
│   ├── popup-messages.tsx # Popup system
│   └── ...
├── config/                # Easy-to-edit configuration
│   ├── playlist.ts        # Music playlist
│   └── popups.ts          # Popup messages
├── public/                # Static files
│   ├── audio/            # Music files
│   └── images/           # Images
└── lib/                   # Utilities
\`\`\`

## Common Tasks

### Adding a New Song
1. Add MP3 file to `public/audio/`
2. Edit `config/playlist.ts`
3. Add new entry with title, artist, and file path

### Adding a New Popup
1. If using an image, add it to `public/images/`
2. Edit `config/popups.ts`
3. Add new entry with type, content, and optional image

### Changing Background Image
1. Add new image to `public/images/`
2. Edit `components/background-video.tsx`
3. Update the image path

### Updating Shopify Link
1. Edit `components/floating-nav.tsx`
2. Find the SHOP button (around line 50)
3. Replace the href with your Shopify URL

## Need Help?

If you need to make changes to the site structure or add new features, you can:
1. Come back to v0 and ask for specific changes
2. Edit the files directly if you're comfortable with React/Next.js
3. Hire a developer to help with more complex customizations

## Deployment Checklist

Before going live:
- [ ] Update Shopify store URL
- [ ] Add your own music files
- [ ] Customize popup messages
- [ ] Update all menu pages with your content
- [ ] Test the site on mobile and desktop
- [ ] Deploy to Vercel
- [ ] Connect your domain
- [ ] Test everything on the live site

---

**Inspiring Hope Through Love, Faith and Creative Expression**
