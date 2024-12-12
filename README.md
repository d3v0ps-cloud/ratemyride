# Rate My Ride

A web application for collecting and managing family driver reviews through a web-based interface, with feedback being sent to a Discord channel.

## Overview

This application allows family members to submit reviews of drivers, including ratings and comments. All reviews are automatically sent to a designated Discord channel for easy tracking and visibility.

## Features

- Web-based form interface
- Mobile-responsive design
- Family member selection
- Driver selection
- Interactive 5-star rating system
- Comment submission
- Discord integration for review notifications

## Technical Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- Responsive design using flexbox

### Backend
- Node.js
- Express.js
- Multer for form data processing
- Discord webhook integration

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Access the application at `http://localhost:3000`

## Project Structure

```
ratemyride/
├── public/
│   └── index.html      # Frontend interface
├── server.js           # Express server and API endpoints
├── package.json        # Project dependencies
└── README.md          # Documentation
```

## System Requirements

### Functional Requirements

#### User Interface
- Web-based form interface
- Responsive and mobile-friendly design
- Family member selection (Mum, Dad, Oliver, Jack, Other)
- Driver selection (Mum, Dad, Oliver, Jack, Other)
- 5-star rating system
- Comment text area
- Submit button

#### Data Processing
- Form submission handling
- Data validation
- Discord webhook integration
- Submission confirmation

### Non-Functional Requirements

#### Performance
- Form submissions process within 2 seconds
- Interface loads within 1 second

#### Security
- Secure webhook URL handling
- Form validation against malicious submissions

#### User Experience
- Clean, intuitive interface
- Consistent styling
- Clear visual feedback
- Responsive design for all screen sizes

#### Browser Compatibility
- Support for modern web browsers
- Consistent cross-platform experience

## API Integration

### Discord Webhook
- Sends formatted messages to Discord channel
- Message format: "New review from [Family Member]: [Rating] stars. The Driver was: [Driver]. Comment: [Comment]"

## Error Handling
- Form validation errors
- Network connectivity issues
- Discord API rate limits
- Failed submission handling

## Success Criteria
- Successful form submissions
- Accurate delivery of reviews to Discord
- User-friendly interface
- Responsive design across devices
- Clear submission confirmation

## License
MIT License
