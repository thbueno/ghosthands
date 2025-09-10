# Project Overview

This is a personal portfolio website for Thiago Bueno, a Software Engenieer. It is built with Next.js and Tailwind CSS. The project uses the App Router, and the pages are composed of React components.

## Plan & Review

### Before starting work

- Always in plan mode to make a plan
- After get the plan, make sure you Write the plan to •claude/tasks/TASK_NAME.md
- The plan should be a detailed implementation plan and the reasoning behind them, as well as tasks broken down.
- If the task require external knowledge or certain package, also research to get latest knowledge (Use Task tool for research)

- Don't over plan it, always think MVP.
- Once you write the plan, firstly ask me to review it. Do not continue until I approve the plan.

### While implementing

- You should update the plan as you work.
- After you complete tasks in the plan, you should update and append detailed descriptions of the changes you made, so following tasks can be easily hand over to other engineers.

# Building and Running

To get the project up and running, follow these steps:

1.  **Install dependencies:**

    ```bash
    pnpm install
    ```

2.  **Run the development server:**

    ```bash
    pnpm dev
    ```

3.  **Build for production:**

    ```bash
    pnpm build
    ```

4.  **Start the production server:**
    ```bash
    pnpm start
    ```

# Development Conventions

- **Styling:** The project uses Tailwind CSS for styling. Utility classes are preferred over custom CSS.
- **Components:** The UI is built with React components, which are located in the `components` directory.
- **Formatting:** The project uses Prettier for code formatting. You can format the code by running:
  ```bash
  pnpm format
  ```
- **Linting:** The project uses Next.js's built-in ESLint configuration. You can lint the code by running:
  ```bash
  pnpm lint
  ```
