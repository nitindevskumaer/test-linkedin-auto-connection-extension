# LinkedIn Auto Connection Chrome Extension

This Chrome extension automates the process of sending connection requests on LinkedIn, helping you expand your network efficiently. Built with React, it identifies all the "Connect" buttons on the "My Network" page and sends connection requests automatically. It also provides real-time tracking of sent requests and the ability to start/stop the automation as needed.

## Features

- **Automated Connection Requests**: Automatically sends connection requests on LinkedIn.
- **Real-Time Tracking**: Displays the count of sent requests in a circular counter.
- **Start/Stop Control**: Allows you to start and stop the automation process at any time.
- **React-Based UI**: A lightweight and responsive user interface built with React.

## Installation

### 1. Clone the repository
`git clone https://github.com/nitindevskumaer/test-linkedin-auto-connection-extension`
`cd linkedin-auto-connect`

### 2. Install Dependencies
Navigate to the project directory and run the following command to install the necessary
npm install

### 3. Build the Extension
After installing dependencies, build the project with:
`npm run build`

This will generate the necessary files in the build/ directory for the Chrome extension.

### Load Your Extension in Chrome
1. Open Chrome and navigate to `chrome://extensions/`
2. Toggle on "Developer mode" in the top-right corner.
3. Click the "Load unpacked" button.
4. Select the build/ folder from your React project.

Your extension is now loaded in Chrome!


### Test Your Extension
1. Open LinkedIn and go to the "My Network" tab.
2. Click on the extension icon in the Chrome toolbar to open the popup.
3. Click the Start Sending Requests button to initiate the automatic connection requests.
4. The extension will begin sending requests, and you’ll see a live counter of sent requests.
5. To stop the process at any time, click the Stop Sending Requests button.

### Development
If you want to make changes or add new features:
1. Run the project in development mode with:
`npm start`

2. Open http://localhost:3000 to view your app in the browser. The page will reload as you make edits.