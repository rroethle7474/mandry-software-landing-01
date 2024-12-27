# Mandry Software Landing Page - Image Structure Documentation

## Overview
This document outlines the image structure and specifications for the Mandry Software landing page's time-based images.

## Image Specifications

### Logo
- **Dimensions:** 160x160px
- **Format:** WebP with PNG fallback
- **Target file size:** 30-50KB per variant
- **Time variations:** Morning, Midday, Evening, Night

### Hero Image
- **Large (Desktop/Tablet):** 1280x720px
- **Small (Mobile):** 640x360px
- **Aspect ratio:** 16:9 maintained across all sizes
- **Format:** WebP with PNG fallback
- **Target file size:** 150-180KB for largest variant
- **Time variations:** Morning, Midday, Evening, Night

## File Structure
```
src/assets/images/
├── logo/
│   ├── logo-morning.webp
│   ├── logo-morning.png
│   ├── logo-midday.webp
│   ├── logo-midday.png
│   ├── logo-evening.webp
│   ├── logo-evening.png
│   ├── logo-night.webp
│   └── logo-night.png
└── hero/
    ├── hero-morning-large.webp
    ├── hero-morning-large.png
    ├── hero-morning-small.webp
    ├── hero-morning-small.png
    ├── hero-midday-large.webp
    ├── hero-midday-large.png
    ├── hero-midday-small.webp
    ├── hero-midday-small.png
    ├── hero-evening-large.webp
    ├── hero-evening-large.png
    ├── hero-evening-small.webp
    ├── hero-evening-small.png
    ├── hero-night-large.webp
    ├── hero-night-large.png
    ├── hero-night-small.webp
    └── hero-night-small.png
```

## Time Periods
- **Morning:** 4 AM - 11:59 AM
- **Midday:** 12 PM - 4:59 PM
- **Evening:** 5 PM - 7:59 PM
- **Night:** 8 PM - 3:59 AM

## Implementation Notes

### Image Optimization
- All images processed through Squoosh.app
- WebP format used as primary format
- PNG provided as fallback for older browsers
- Images optimized to meet target file size requirements while maintaining quality

### Responsive Design
- Hero images use different sizes for desktop/tablet vs mobile
- Single logo size (160x160px) works across all devices
- CSS media queries handle responsive image loading
- Images maintain consistent quality across all time variations

### Browser Support
- WebP images supported in all modern browsers
- PNG fallback ensures compatibility with older browsers
- Image dimensions chosen to support common device sizes and resolutions

## Additional Resources
- Squoosh.app - Used for image optimization and format conversion
- GIMP - Used for any necessary image adjustments