# Background Music Setup Instructions

## Overview
A subtle, opt-in background music player has been added to your website. It appears as a floating button in the bottom-right corner.

## Features
✅ **Opt-in by default** - Music starts OFF, user clicks to enable
✅ **Low volume** - Defaults to 15% volume for subtle background ambiance
✅ **Volume control** - Users can adjust from 0-100%
✅ **Persistent preferences** - Remembers user's play/pause and volume settings
✅ **Dismissible** - Users can permanently hide the player with the X button
✅ **Loops continuously** - Music repeats seamlessly
✅ **Accessible** - Includes ARIA labels and keyboard support

## Required: Add Your Audio File

### Step 1: Prepare Your Audio File

1. **File format**: MP3 (most compatible) or OGG/WAV
2. **File size**: Recommend keeping under 5MB for fast loading
3. **Audio specs**:
   - Bitrate: 128-192 kbps (higher isn't necessary for background music)
   - Sample rate: 44.1 kHz
   - Mono or Stereo: Mono is fine for ambient music and saves bandwidth

### Step 2: Name Your File

Rename your audio file to: **`background-music.mp3`**

### Step 3: Add to Public Folder

Place the file in your `public` directory:
```
controlleddynamicsinc.com/
├── public/
│   ├── background-music.mp3  ← Add your file here
│   ├── AngleLock Logo.png
│   └── ...
```

### Step 4: Deploy

After adding the file, commit and deploy:
```bash
git add public/background-music.mp3
git commit -m "Add background music audio file"
git push heroku main
```

## Where to Find Royalty-Free Ambient Music

Since this is a commercial website, you need properly licensed music:

### Free Options (with attribution):
- **Incompetech** (https://incompetech.com) - Free with attribution
- **Free Music Archive** (https://freemusicarchive.org) - Various licenses
- **YouTube Audio Library** (https://studio.youtube.com) - Free for commercial use

### Paid/Premium Options:
- **Epidemic Sound** (https://epidemicsound.com) - ~$15/month
- **Artlist** (https://artlist.io) - ~$15/month
- **AudioJungle** (https://audiojungle.net) - One-time purchase per track

### Recommended Search Terms:
- "ambient background music"
- "corporate ambient"
- "relaxing instrumental"
- "soft technology music"
- "calm industrial background"

## Testing Locally

1. Add your audio file to `/public/background-music.mp3`
2. Run the dev server: `npm run dev`
3. Open http://localhost:3000
4. Look for the music button in bottom-right corner
5. Click to enable music and test volume controls

## Customization

### Change the audio file path
Edit: `components/ui/BackgroundMusic.tsx` line 74:
```tsx
src="/your-custom-filename.mp3"
```

### Change default volume
Edit: `components/ui/BackgroundMusic.tsx` line 12:
```tsx
const [volume, setVolume] = useState(0.15); // Change 0.15 to any value 0.0-1.0
```

### Change position
Edit: `components/ui/BackgroundMusic.tsx` line 85:
```tsx
<div className="fixed bottom-6 right-6 z-50">
// Change to: bottom-6 left-6 for left corner
// Or: top-6 right-6 for top-right
```

## Browser Compatibility

- ✅ Chrome/Edge: Full support
- ✅ Firefox: Full support
- ✅ Safari: Full support
- ⚠️ Mobile browsers: May restrict auto-play (player handles this gracefully)

## Accessibility Notes

The player includes:
- ARIA labels for screen readers
- Keyboard accessible controls
- Visual feedback for all interactions
- Option to completely dismiss

## User Privacy

User preferences are stored in `localStorage`:
- `backgroundMusicPlaying` - true/false
- `backgroundMusicVolume` - 0.0-1.0
- `backgroundMusicDismissed` - true/false

No data is sent to servers or tracked externally.
