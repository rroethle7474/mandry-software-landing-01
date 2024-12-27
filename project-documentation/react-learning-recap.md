# Mandry Software Landing Page - Learning Recap

## Project Journey Reflection
Our journey in creating the Mandry Software landing page has been both challenging and rewarding. As we wrap up this project, it's important to reflect on the key learning points and ensure we've grasped the fundamental concepts that will serve us in future React development.

## Core React Concepts Review Questions

### Component Architecture
1. In our project, we separated components into layout/, ui/, and sections/. What are the benefits of this organization pattern, and how does it improve code maintainability?

2. We used both regular components and "time-based" components in our project. How do these differ in terms of their lifecycle and re-rendering behavior?

3. Our TimeBasedImage component needed to handle multiple image states. What strategies did we use to prevent unnecessary re-renders, and why were they important?

### State Management and Hooks
4. The useTimeOfDay custom hook was central to our project. What advantages did creating this custom hook provide over managing time-based logic directly in components?

5. We implemented several useEffect cleanup functions in our components. Can you explain why these were necessary, particularly in the context of our time-based transitions?

6. How did we handle state management for the email subscription form in the footer? What considerations went into this implementation?

### Performance Optimization
7. We used React.lazy() for certain components. Which components did we choose to lazy load and why?

8. Our image loading strategy involved multiple formats and sizes. How did this impact the application's performance, and what role did React play in managing these resources?

### React Development Best Practices
9. Throughout the project, we used PropTypes for type checking. How does this compare to alternatives like TypeScript, and why did we make this choice?

10. We implemented error boundaries in our application. Can you explain where we used them and why they were particularly important for our time-based components?

### Mobile Responsiveness
11. How did our use of React components facilitate the implementation of the mobile-first approach? What specific patterns did we employ?

12. The hamburger menu implementation required state management and animation. How did React's features help in creating a smooth user experience?

### Project Architecture
13. We structured our project using Vite instead of Create React App. What specific benefits did this provide during development?

14. How did our component structure prepare us for future API integration? What patterns did we implement to make this transition smoother?

### Testing and Quality Assurance
15. What testing strategies did we implement for our React components, particularly for testing time-based behavior?

## Technical Implementation Challenges
16. We faced some challenges with image transitions based on time. How did we solve the issue of smooth transitions between different time periods?

17. The email subscription form needed validation. How did we implement this while maintaining good separation of concerns?

## Future Development Considerations
18. Looking at our current implementation, how would you approach adding user authentication to our landing page?

19. What considerations would you keep in mind when integrating our React frontend with a backend API?

20. How would you extend our current component structure to accommodate additional pages while maintaining our established patterns?

## Reflection
These questions cover the major aspects of our React implementation and should help solidify understanding of both basic and advanced concepts we used in the project. Take time to think through each answer, referring back to our codebase as needed.