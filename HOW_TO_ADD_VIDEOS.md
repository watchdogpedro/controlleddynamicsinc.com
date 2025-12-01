# How to Add AngleLock Videos to the Website

## Quick Start

Your video library page is now live at: `/resources/videos`

All video data is centralized in one file: `lib/video-data.ts`

## Step-by-Step Instructions

### 1. Visit the AngleLock YouTube Channel
Go to: https://www.youtube.com/@AngleLock/videos

### 2. For Each Video You Want to Add:

#### A. Get the Video ID
1. Click on a video
2. Look at the URL in your browser
3. Copy the ID after `watch?v=`

Example:
- URL: `https://www.youtube.com/watch?v=ABC123XYZ`
- Video ID: `ABC123XYZ`

#### B. Get the Video Information
- Title: Copy from the video page
- Description: Copy or write a brief description
- Duration: Note the video length (e.g., "5:30")
- Category: Choose from:
  - Product Overview
  - Technical Deep Dive
  - Assembly & Installation
  - Applications & Case Studies
  - Comparison Videos
  - Customer Testimonials

### 3. Edit the Video Data File

Open: `lib/video-data.ts`

Add a new entry in the `videos` array:

```typescript
{
  id: '7',  // Increment this number
  title: 'Your Video Title Here',
  description: 'Your video description explaining what the video shows',
  youtubeId: 'ABC123XYZ',  // The ID you copied from YouTube
  category: 'Product Overview',  // Choose appropriate category
  duration: '5:30'  // Optional
}
```

### 4. Example Video Entry

```typescript
{
  id: '4',
  title: 'AngleLock 5-Plane Locking Mechanism',
  description: 'Watch how our patented 5-plane locking system creates connections 10x stronger than traditional T-slot, with zero maintenance required.',
  youtubeId: 'dQw4w9WgXcQ',
  category: 'Technical Deep Dive',
  duration: '8:45'
}
```

### 5. Save and Build

After adding videos, run:
```bash
npm run build
```

Then deploy to Heroku:
```bash
git add .
git commit -m "Add AngleLock videos to library"
git push heroku main
git push origin main
```

## Current Placeholder Videos

The file currently has 3 placeholder videos with ID `REPLACE_WITH_REAL_ID`.

Replace these with actual video IDs from your YouTube channel.

## Features of the Video Page

✅ **Automatic YouTube Thumbnails** - Fetched directly from YouTube
✅ **Category Filtering** - Users can filter by video type
✅ **Modal Video Player** - Click to watch in overlay
✅ **Responsive Grid** - Adapts to mobile, tablet, desktop
✅ **Duration Badges** - Shows video length
✅ **Direct YouTube Link** - Button to visit full channel
✅ **Technical Whitepaper** - Full comparison document included

## Need Help?

- Video thumbnails are automatically pulled from YouTube
- If a thumbnail doesn't load, it falls back to a lower quality version
- The page builds successfully with placeholder videos
- You can add as many videos as you want

## Video File Location

- **Video Data:** `lib/video-data.ts`
- **Videos Page:** `app/resources/videos/page.tsx`
- **Already Linked:** From Resources menu in navigation

## Testing Locally

To test before deploying:
```bash
npm run dev
```

Then visit: http://localhost:3000/resources/videos
