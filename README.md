# WXT + React - Follow All Users Extension

This is a browser extension built using **WXT** and **React**. It allows you to automatically follow all users on the "For You" page of a social media platform like **X/Twitter** by interacting with their profile avatars and clicking the follow button in the hover pop-up.

## Features
- Automatically scrolls through user profiles in the "For You" feed.
- Detects the hover pop-up when you hover over user avatars.
- Clicks the "Follow" button for each user.
- Skips users who are already followed or do not have a follow button.
- Customizable follow behavior with delays to simulate real user interactions.
- Floating button in the UI to trigger the "Follow All" action.

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/wxt-react-extension.git
   cd wxt-react-extension```
2. **Install dependencies:**

    ```bash
    npm install```

3. **Run the extension:**

    ```bash
    npm run dev```


## How It Works

- "For You" Tab: The extension checks if you're on the "For You" tab and waits for the page to load.

- Hovering over User Avatars: The script simulates a hover action over each user’s avatar to trigger the profile pop-up, where the "Follow" button appears.

- Clicking Follow: Once the "Follow" button is detected, the script clicks it, follows the user, and waits for a randomized interval before proceeding to the next user.

- Clearing Hover State: After following a user, the hover state is cleared to ensure that the next hover action interacts with the correct profile pop-up.

- Delays: Random delays are added between actions to mimic human behavior and avoid triggering anti-bot mechanisms.


## Configuration
- Customizable Delay: You can modify the delay times between actions in the followAllUsers function to suit your needs.

- Behavior: By default, the extension follows all users on the page. You can modify the script to follow a specific subset of users or perform different actions.

## Technologies Used
- WXT: A framework for building browser extensions.
- React: Used to create the floating button and manage UI components.
- TypeScript: The extension is written in TypeScript for better type safety and maintainability.