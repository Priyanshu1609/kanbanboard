# Interactive Kanban Board Application using React JS - README

This repository contains an interactive Kanban board application built using React JS. The application interacts with the provided API from [https://api.quicksell.co/v1/internal/frontend-assignment](https://api.quicksell.co/v1/internal/frontend-assignment) to fetch and display ticket data in a dynamic Kanban board. Users can group and sort tickets based on different criteria, including status, user, and priority. The application also retains the user's view state even after page reload.

## Features

- **Fetching Data**: The application fetches ticket data from the provided API.

- **Grouping Options**: Users can choose to group tickets by status, user, or priority.

- **Sorting Options**: Tickets can be sorted by priority or title in the desired order.

- **Priority Levels**: Tickets are assigned priority levels (Urgent, High, Medium, Low, No priority) based on the API data.

- **Responsive Design**: The Kanban board is responsive and visually appealing, ensuring a smooth user experience on different devices.

- **View State Persistence**: The application saves the user's view state, ensuring that their preferences are retained even after page reload.

## Installation

To run the application locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/interactive-kanban-board.git
   ```

2. Navigate to the project directory:

   ```bash
   cd interactive-kanban-board
   ```

3. Install the required dependencies:

   ```bash
    npm install
   ```

4. Start the development server:

   ```bash
    npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

## Usage

1. Click the "Display" button to load and display ticket data from the API.
2. Select a grouping option (Status, User, Priority) from the dropdown to group tickets accordingly.
3. Choose a sorting option (Priority, Title) from the available options to sort the displayed tickets.
4. The Kanban board dynamically adjusts based on your selections.
5. Your view state will be saved even after you reload the page.

---

By [Priyanshu Kumar Panda](https://github.com/your-username) - Feel free to customize this section.
