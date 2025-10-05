# Hopefield Radio - Pre-Launch Checklist

Complete this checklist before launching your site to ensure everything functions correctly.

## 🎵 Audio & Media

- [ ] **Music Files**
  - [ ] Upload your actual radio music tracks to `/public/audio/`
  - [ ] Update playlist in `config/playlist.ts` with real track information
  - [ ] Test all audio files play correctly in the music player

- [ ] **Book Covers**
  - [ ] Create/upload cover for "Letter to my sisters" by Tyanna Lindsay
  - [ ] Create/upload cover for "Tripping for Jesus" by Tyanna Lindsay
  - [ ] Create/upload cover for "Ain't Nobody Playing But You" by TJ Lindsay
  - [ ] Create/upload cover for "Hopefield" book
  - [ ] Replace placeholder images in `/public/` folder

- [ ] **Album Covers**
  - [ ] Create/upload cover for "Where's Lito" (featured album)
  - [ ] Create/upload covers for all 9 previous albums
  - [ ] Update album names and descriptions in `app/music/page.tsx` with real project names

- [ ] **Photos**
  - [ ] Upload couple photo for About page (`/public/couple-photo.jpg`)
  - [ ] Upload 6 milestone photos for Marriage timeline
  - [ ] Upload any additional images for popup messages

## 🛍️ Shopify Store

- [ ] **Store Setup**
  - [ ] Create your Shopify store account
  - [ ] Add all books as products (4 books total)
  - [ ] Add "Where's Lito" album as pre-order product
  - [ ] Add all previous albums as digital download products
  - [ ] Set up payment processing

- [ ] **Update Links**
  - [ ] Replace `https://your-shopify-store.com` in `components/floating-nav.tsx`
  - [ ] Update all Shopify links in `app/books/page.tsx` (4 book links)
  - [ ] Update all Shopify links in `app/music/page.tsx` (10 album links)
  - [ ] Update Shopify store URL in `config/playlist.ts` if needed

## 📧 Email & Contact

- [ ] **Email Setup**
  - [ ] Create shared email: `hello@hopefieldradio.com` (or your preferred address)
  - [ ] Update email address in `app/contact/page.tsx` (appears 2 times)
  - [ ] Test contact form sends emails correctly
  - [ ] Set up email forwarding if needed

## 📱 Social Media

- [ ] **Shared Accounts (Create These)**
  - [ ] Create Hopefield Radio Instagram account
  - [ ] Create Hopefield Radio Facebook page
  - [ ] Create Hopefield Radio YouTube channel

- [ ] **Update Social Links in `app/contact/page.tsx`**
  - [ ] Hopefield Radio Instagram URL
  - [ ] Hopefield Radio Facebook URL
  - [ ] TJ Lindsay Instagram URL (verify: `@tjlindsay`)
  - [ ] TJ Lindsay YouTube URL (verify: `@tjlindsay`)
  - [ ] Tyanna Lindsay Instagram URL (verify: `@tyannalindsay`)

- [ ] **Update Social Links in `app/about/page.tsx`**
  - [ ] Same social media URLs as above

## 🎥 YouTube Videos

- [ ] **Get Video IDs**
  - [ ] Wedding video YouTube ID
  - [ ] "The Lindsays" podcast episodes (at least 3-5 recent episodes)
  - [ ] "Hopefield Radio" podcast episodes (at least 3-5 recent episodes)

- [ ] **Update Video Embeds**
  - [ ] Wedding video in `app/marriage/page.tsx` (replace `YOUR_WEDDING_VIDEO_ID`)
  - [ ] Podcast episodes in `app/podcasts/page.tsx` (replace placeholder IDs)
  - [ ] TJ's YouTube channel link in `app/music/page.tsx`

## 🗺️ Marriage Timeline Map

- [ ] **Create Google My Maps**
  - [ ] Go to [Google My Maps](https://www.google.com/maps/d/)
  - [ ] Create a new map
  - [ ] Add pins for all 6 milestone locations:
    - 2015: Atlanta, GA (We Met)
    - 2017: Savannah, GA (Engaged)
    - 2018: Atlanta, GA (Married)
    - 2020: Atlanta, GA (Started Hopefield Radio)
    - 2023: Miami, FL (5 Year Anniversary)
    - 2025: Atlanta, GA (Still Growing)
  - [ ] Share map and get embed code
  - [ ] Update map ID in `app/marriage/page.tsx` (replace `YOUR_GOOGLE_MAP_ID`)

## 📝 Content Updates

- [ ] **About Page Bios**
  - [ ] Write/update TJ's bio in `app/about/page.tsx`
  - [ ] Write/update Tyanna's bio in `app/about/page.tsx`
  - [ ] Update couple's journey story

- [ ] **Book Descriptions**
  - [ ] Write description for "Letter to my sisters"
  - [ ] Write description for "Tripping for Jesus"
  - [ ] Write description for "Ain't Nobody Playing But You"
  - [ ] Write description for "Hopefield"
  - [ ] Update all in `app/books/page.tsx`

- [ ] **Album Information**
  - [ ] Update all 10 album names with real project names
  - [ ] Write descriptions for each album
  - [ ] Verify release years
  - [ ] Update in `app/music/page.tsx`

- [ ] **Popup Messages**
  - [ ] Customize popup quotes in `config/popups.ts`
  - [ ] Add your own inspirational messages
  - [ ] Upload any popup images you want to use

## 🌐 Domain & Deployment

- [ ] **Vercel Deployment**
  - [ ] Click "Publish" button in v0 (top right)
  - [ ] Deploy to Vercel
  - [ ] Verify site works on Vercel URL

- [ ] **Domain Connection**
  - [ ] Add `hopefieldradio.com` in Vercel project settings
  - [ ] Update DNS records with your domain registrar
  - [ ] Verify domain is connected and SSL is active
  - [ ] Test site loads on `hopefieldradio.com`

## ✅ Final Testing

- [ ] **Navigation**
  - [ ] Test all menu links work (Books, Music, Podcasts, Marriage, About, Contact)
  - [ ] Test "Shop" button goes to Shopify store
  - [ ] Test all internal page links work

- [ ] **Functionality**
  - [ ] Music player plays/pauses correctly
  - [ ] Record player icon spins and controls music
  - [ ] Contact form sends emails
  - [ ] All YouTube videos load and play
  - [ ] All Shopify product links work
  - [ ] Popup messages appear correctly

- [ ] **Mobile Testing**
  - [ ] Test site on mobile phone
  - [ ] Verify navigation works on mobile
  - [ ] Check all images load properly
  - [ ] Test music player on mobile

- [ ] **Browser Testing**
  - [ ] Test in Chrome
  - [ ] Test in Safari
  - [ ] Test in Firefox
  - [ ] Test in Edge

## 📋 Quick Reference: Files to Update

| What to Update | File Location | What to Change |
|----------------|---------------|----------------|
| Music playlist | `config/playlist.ts` | Track names, artists, audio files |
| Popup messages | `config/popups.ts` | Quotes, images, captions |
| Shopify store URL | `components/floating-nav.tsx` | Main shop button link |
| Book info & links | `app/books/page.tsx` | All 4 books, descriptions, Shopify links |
| Album info & links | `app/music/page.tsx` | All 10 albums, descriptions, Shopify links |
| Social media links | `app/contact/page.tsx` | Instagram, Facebook, YouTube URLs |
| Email address | `app/contact/page.tsx` | hello@hopefieldradio.com (2 places) |
| YouTube videos | `app/podcasts/page.tsx` | Podcast episode IDs |
| Wedding video | `app/marriage/page.tsx` | Wedding video ID |
| Marriage map | `app/marriage/page.tsx` | Google My Maps ID |
| About page bios | `app/about/page.tsx` | TJ & Tyanna bios, couple story |

## 🎉 Launch Day

- [ ] Final check of all items above
- [ ] Announce launch on social media
- [ ] Share with friends and family
- [ ] Monitor for any issues
- [ ] Celebrate! 🎊

---

**Need Help?** Refer to the `README.md` file for detailed instructions on updating each section.
