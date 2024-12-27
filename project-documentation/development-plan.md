# Mandry Software Landing Page - Development Plan

## Project Manager Review Notes

### Additional Considerations and Clarifications

1. **Mobile-First Implementation**
   - All components should be designed mobile-first
   - Test on various device sizes before desktop styling
   - Ensure hamburger menu is touch-friendly
   - Minimum tap target size of 44x44 pixels for mobile elements

2. **Performance Metrics**
   - Set target Lighthouse scores:
     - Performance: > 90
     - Accessibility: > 90
     - Best Practices: > 90
     - SEO: > 90
   - First Contentful Paint (FCP) < 1.8s
   - Largest Contentful Paint (LCP) < 2.5s

3. **Accessibility Requirements**
   - WCAG 2.1 AA compliance
   - Proper ARIA labels for time-based images
   - Ensure sufficient color contrast
   - Keyboard navigation support

4. **Code Quality Standards**
   - ESLint configuration for React
   - Prettier for consistent formatting
   - JSDoc comments for complex functions
   - Component prop types documentation
   - README.md with setup instructions

5. **Browser Support**
   - Chrome (last 2 versions)
   - Firefox (last 2 versions)
   - Safari (last 2 versions)
   - Edge (last 2 versions)
   - Mobile browsers (iOS Safari, Chrome Android)

6. **Critical Paths & Dependencies**
   - Image generation must be completed before component development
   - Time-based logic must be tested before image integration
   - Mobile menu implementation requires completed header design
   - Email validation before form UI completion

# Original Development Plan

## 1. Project Setup and Structure

### Initial Setup
- Create new React project using Vite for better performance
- Install and configure TailwindCSS
- Set up project structure:
  ```
  src/
  ├── components/
  │   ├── layout/
  │   │   ├── Header.jsx
  │   │   ├── Footer.jsx
  │   │   └── Layout.jsx
  │   ├── ui/
  │   │   ├── TimeBasedImage.jsx
  │   │   ├── Logo.jsx
  │   │   └── Button.jsx
  │   └── sections/
  │       └── Hero.jsx
  ├── hooks/
  │   └── useTimeOfDay.js
  ├── utils/
  │   └── timeUtils.js
  ├── assets/
  │   └── images/
  └── styles/
      └── globals.css
  ```

## 2. Core Components Development Sequence

### Phase 1: Time-Based Logic
1. Create `useTimeOfDay` custom hook:
   - Implement logic for four distinct time periods:
     - Dawn/Morning (4 AM - 11:59 AM)
     - Midday (12 PM - 4:59 PM)
     - Evening (5 PM - 7:59 PM)
     - Night (8 PM - 3:59 AM)
   - Return current period and next transition time
   - Include reactive updates when time period changes

### Phase 2: Base Components
1. Create Logo component:
   - SVG-based implementation for better scaling
   - Time-based variations using `useTimeOfDay`
   - Animation capabilities for smooth transitions

2. Develop Header component:
   - Sticky positioning
   - Mobile-responsive hamburger menu
   - Logo integration
   - Navigation links with placeholder routes

3. Implement Footer component:
   - Company name display
   - Dynamic date/time display
   - Email subscription form (UI only)
   - Responsive layout

### Phase 3: Main Content
1. Build Hero section:
   - Time-based background image
   - Centered content layout
   - Heading and description placement
   - Responsive design considerations

2. Create Layout wrapper:
   - Container management
   - Proper spacing
   - Content organization

## 3. Styling Implementation

### Color Scheme (Based on Tavus Example)
- Primary: Purple (#5B21B6)
- Secondary: White (#FFFFFF)
- Background: Dark (#1A1A1A)
- Accent: Pink (#EC4899)
- Text: Light Gray (#F3F4F6)

### Typography
- Headings: Inter (or similar modern sans-serif)
- Body: System font stack
- Size scale using Tailwind's default scale

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 4. Time-Based Assets

### Midjourney Image Generation Requirements

#### Logo Generation Prompts
1. Morning Sun Logo:
   ```
   A minimalist, clean logo design of an orange sun with wispy clouds, corporate tech style, vector art, flat design, orange and white colors, professional, modern --ar 1:1
   ```

2. Midday Sun Logo:
   ```
   A minimalist, clean logo design of a bright yellow sun at its peak, minimal clouds, corporate tech style, vector art, flat design, yellow and white colors, professional, modern --ar 1:1
   ```

3. Evening Sun Logo:
   ```
   A minimalist, clean logo design of a setting sun with orange/red hues, few clouds, corporate tech style, vector art, flat design, orange/red and white colors, professional, modern --ar 1:1
   ```

4. Night Logo:
   ```
   A minimalist, clean logo design of a crescent moon with small stars, corporate tech style, vector art, flat design, white and dark blue colors, professional, modern --ar 1:1
   ```

#### Hero Image Generation Prompts
1. Morning Scene:
   ```
   Professional developer working at a modern desk with computer, morning sunlight through window, minimalist office space, tech startup environment, clean design, professional photography style --ar 16:9
   ```

2. Midday Scene:
   ```
   Professional developer working at a modern desk with computer, bright midday lighting, minimalist office space, tech startup environment, clean design, professional photography style --ar 16:9
   ```

3. Evening Scene:
   ```
   Professional developer working at a modern desk with computer, warm evening sunset lighting through window, minimalist office space, tech startup environment, clean design, professional photography style --ar 16:9
   ```

4. Night Scene:
   ```
   Professional developer working at a modern desk with computer, night time office with ambient lighting, minimalist office space, tech startup environment, clean design, professional photography style --ar 16:9
   ```

#### Image Processing Requirements
- Export all Midjourney images at highest available resolution
- Process through image optimization tools
- Convert to appropriate web formats (WebP with PNG fallback)
- Ensure file sizes remain under 200KB for optimal loading
- Maintain consistent dimensions across time variations

### Post-Processing Steps
1. Use free design software (recommended options: GIMP, Figma free plan, or Inkscape) to:
   - Remove any inconsistent elements
   - Adjust contrast and brightness for consistency
   - Ensure smooth transitions between time states
   - Create WebP versions for modern browsers
   - Generate appropriate fallback formats

2. Image Organization:
   ```
   src/assets/images/
   ├── logo/
   │   ├── morning.{webp,png}
   │   ├── midday.{webp,png}
   │   ├── evening.{webp,png}
   │   └── night.{webp,png}
   └── hero/
       ├── morning.{webp,png}
       ├── midday.{webp,png}
       ├── evening.{webp,png}
       └── night.{webp,png}
   ```

### Logo Variations
1. Morning Sun:
   - Orange sun (#FFA500)
   - Light, wispy clouds
   - Bright, energetic feel

2. Midday Sun:
   - Bright yellow sun (#FFD700)
   - Minimal clouds
   - High-contrast look

3. Evening:
   - Setting sun with orange/red hues
   - Transitional design

4. Night:
   - Moon and stars
   - Dark blue background (#1A1A1A)
   - Subtle star animation

### Hero Image Variations
- Implement as SVG overlays for better performance
- Maintain consistent desk/computer scene
- Adjust lighting and atmospheric elements based on time
- Ensure smooth transitions between states

## 5. Performance Considerations

### Image Optimization
- Use SVG for logo and icons
- Implement lazy loading for hero images
- Optimize image assets for different screen sizes

### Code Optimization
- Implement code splitting
- Use React.memo for pure components
- Optimize re-renders with useMemo and useCallback

## 6. Testing Strategy

### Component Testing
- Test time-based logic
- Verify responsive design breakpoints
- Validate hamburger menu functionality
- Check email input validation

### Visual Testing
- Verify all time-based transitions
- Ensure consistent spacing
- Validate mobile responsiveness
- Cross-browser compatibility check

## 7. Future Considerations

### Extensibility
- Component structure ready for additional pages
- Prepared for API integration
- Modular design for easy updates
- Documentation for future development

## 8. Development Timeline

1. Project Setup: 1 day
2. Core Components: 2 days
3. Time-based Logic: 1 day
4. Styling and Assets: 2 days
5. Testing and Refinement: 1 day

Total Estimated Time: 7 working days

## 9. Dependencies

### Required Packages
- react
- react-dom
- tailwindcss
- @headlessui/react (for accessible UI components)
- date-fns (for time manipulation)
- lucide-react (for icons)

### Development Dependencies
- vite
- postcss
- autoprefixer
- eslint
- prettier