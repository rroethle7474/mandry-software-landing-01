# Mandry Software Landing Page - Project Requirements

## Technologies

-   **Frontend:** React, Tailwind CSS, HTML, CSS, JavaScript
-   **Hosting:** Azure (future consideration, not required for this project)
-   **Image Creation:** Midjourney

## Project Overview

This project involves creating a mobile-first, responsive landing page for Mandry Software.

## Components

### 1. Sticky Header Nav Bar

-   **Behavior:**
    -   Sticks to the top of the viewport.
    -   Transforms into a hamburger menu on mobile devices.
-   **Elements:**
    -   **a. Logo (Left):**
        -   Links to the home page.
        -   See the "Image Logo and Hero Image" section for details.
    -   **b. Links (Right):**
        -   "About" link (no functionality in this initial project phase).
        -   "Projects" link (no functionality in this initial project phase).

### 2. Main Section (Horizontally Centered)

-   **a. Title:**
    -   "Mandry Software"
    -   Style: Modern and hip, reflecting tech culture.
-   **b. Description:**
    -   Two-line description of Mandry Software's services.
    -   Placeholder text is acceptable for now.
-   **c. Hero Image:**
    -   See the "Image Logo and Hero Image" section for details.

### 3. Footer

-   **a. Display:**
    -   "Mandry Software"
    -   Current date/time/year in the user's local time zone.
-   **b. Email Input:**
    -   Allows users to subscribe for updates (no actual functionality in this project phase).

### 4. Image Logo and Hero Image

-   **a. Logo:**
    -   Created using Midjourney.
    -   **Daytime:** Orange sun with wavy clouds.
    -   **Evening:** Moon with stars.
    -   **Dynamic Behavior:** The sun should appear to travel across the sky throughout the day, transitioning to the moon in the evening.
-   **b. Hero Image:**
    -   Created using Midjourney.
    -   **Background:** A person working at a desk on a computer.
    -   **Dynamic Behavior:** Similar to the logo, the image should transition from a daytime scene with the sun moving across the sky to a nighttime scene in the evening. No moon is needed.

### 5. Testing

-   **a. Logo and Hero Image Time-Based Changes:**
    -   Verify that the logo and hero image dynamically change based on the user's local time of day.
-   **b. Mobile Responsiveness:**
    -   Ensure that the website is mobile-friendly.
    -   Confirm that the hamburger menu appears correctly on small devices.

### 6. Other Considerations

-   **a. Azure Deployment:**
    -   Not required for this project, but keep in mind for future development.
-   **b. Future API Connections:**
    -   The landing page will eventually connect to external APIs. Design the project structure with this in mind.
-   **c. Code Quality:**
    -   Maintain clean code.
    -   Separate HTML/CSS styles into different files where possible to improve maintainability and reusability.

### 7. Design Examples

-   **a. Landing Page Example:** `landing.png`
-   **b. Footer Example:** `footer.png`


# Agents

## Role: CEO (LLM)

-   **Backstory:** You are the CEO of Mandry Software, a company specializing in providing cutting-edge consulting and tech solutions for e-commerce businesses. Your expertise lies in creating modern, mobile-friendly landing page web applications that adhere to the latest web development practices and coding standards.
-   **Goal:** Ensure that each task is properly executed. When the final task ("Generate Recap") is reached, provide a comprehensive recap and summary of the project journey. Create this recap as a Markdown document, including technical details and reflection questions aimed at a novice React developer. The goal is to ensure the developer has grasped the subject matter and learned from the experience.

## Role: Software Architect

-   **Background:** A senior software architect specializing in React web applications. You are focused on speed, performance, and creating clean, reusable components.
-   **Goal:** Define the tasks required to complete this project. Outline the necessary technologies and high-level steps that need to be completed sequentially for the senior developer.

## Role: Project Manager

-   **Background:** A senior project manager with expertise in creating clear and understandable work items.
-   **Goal:** Review the tasks created by the software architect. Add any further considerations or feedback to enhance clarity and completeness.

## Role: Senior Developer

-   **Background:** A senior developer who is new to React and eager to learn good development practices within this technology ecosystem. You will be using CSS, HTML, Tailwind CSS, and React. You are mindful of project dependencies and prefer to use only stable libraries.
-   **Goal:** Create the project code for the landing page application, including the images for the logo and hero section.

## Role: Quality Assurance

-   **Background:** A senior QA analyst known for thoroughness and meticulousness in testing landing page websites.
-   **Goal:** Review the completed code and ensure it meets the project's testing requirements.

# Tasks

## Create Design Steps

-   **Description:** The software architect will use their expertise to generate a development plan for the senior developer. This plan will detail how to create the landing page using the tools specified in this task. The plan should consider the "Other Considerations" section from the Project Requirements.
-   **Expected Output:** A Markdown file named `plan.md` outlining all the steps needed to complete the project from a high-level architectural perspective.
-   **Tools:** Midjourney, image editors/converters (if using SVG files for images/logo), React, Tailwind CSS, HTML, CSS, JavaScript.
-   **Agent:** Software Architect

## Review Requirements

-   **Description:** The project manager will review the design plan created by the architect (the `plan.md` file).
-   **Expected Output:** Add feedback and notes directly to the `plan.md` file to improve clarity or address any missing elements.
-   **Tools:** Project requirements, `plan.md` Markdown file.
-   **Agent:** Project Manager

## Create Code

-   **Description:** The senior developer will create the project and all the code required for the Mandry Software landing page, based on the `plan.md` and the project requirements.
-   **Expected Output:** The final code should be functional and able to run locally on the developer's Windows machine.
-   **Tools:** IDE (VS Code or similar), Windows machine, Terminal.
-   **Agent:** Senior Developer

## Validate Results

-   **Description:** The quality assurance analyst will review the completed website, comparing it against the product requirements and the `plan.md` file.
-   **Expected Output:** Provide feedback on the website's functionality and adherence to requirements. Assign a score out of 100 indicating how closely the website meets the requirements.
-   **Tools:** None
-   **Agent:** Quality Assurance

## Generate Recap

-   **Description:** The CEO will provide a retrospective to help the team learn from the project experience.
-   **Expected Output:** A Markdown file named `recap.md` that reviews the chat history and all the work done on the project. This document will focus on development lessons and include questions to help the senior developer solidify their understanding of the concepts used. It will be tailored for someone new to React.
-   **Tools:** Chat history
-   **Agent:** CEO