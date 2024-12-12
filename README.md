# Rate My Ride

A web application for collecting and managing family driver reviews through a web-based interface, with feedback being sent to a Discord channel.

## Overview

This application allows family members to submit reviews of drivers, including ratings and comments. All reviews are automatically sent to a designated Discord channel for easy tracking and visibility.

## Features

- Web-based form interface
- Mobile-responsive design
- Dynamic family member selection
- Dynamic driver selection
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

### Infrastructure
- Docker
- Docker Compose

## Setup and Installation

### Local Development
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the environment file and configure:
   ```bash
   cp .env.example .env
   ```
4. Update the `.env` file with:
   - Your Discord webhook URL
   - List of family members (comma-separated)
5. Start the server:
   ```bash
   npm start
   ```
6. Access the application at `http://localhost:3000`

### Docker Deployment
1. Clone the repository
2. Copy the environment file and configure:
   ```bash
   cp .env.example .env
   ```
3. Update the `.env` file with:
   - Your Discord webhook URL
   - List of family members (comma-separated)
4. Build and start the Docker container:
   ```bash
   docker-compose up --build
   ```
5. Access the application at `http://localhost:3000`

## Project Structure

```
ratemyride/
├── public/
│   └── index.html      # Frontend interface
├── server.js           # Express server and API endpoints
├── package.json        # Project dependencies
├── Dockerfile          # Docker image configuration
├── docker-compose.yml  # Docker Compose configuration
├── .env.example        # Example environment variables
└── README.md          # Documentation
```

## Environment Variables

The application requires the following environment variables:

- `DISCORD_WEBHOOK_URL`: The webhook URL for your Discord channel
- `FAMILY_MEMBERS`: Comma-separated list of family members (e.g., "Mum,Dad,Oliver,Jack,Other")

These can be configured by:
1. Creating a `.env` file based on `.env.example`
2. Setting the variables in your environment
3. Passing them through Docker Compose

## API Endpoints

### GET /api/family-members
Returns the list of configured family members.

Response format:
```json
{
  "familyMembers": ["Mum", "Dad", "Oliver", "Jack", "Other"]
}
```

### POST /submit
Submits a new review.

## System Requirements

### Functional Requirements

#### User Interface
- Web-based form interface
- Responsive and mobile-friendly design
- Dynamic family member selection from configured list
- Dynamic driver selection from configured list
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
- Missing environment variables handling

## Success Criteria
- Successful form submissions
- Accurate delivery of reviews to Discord
- User-friendly interface
- Responsive design across devices
- Clear submission confirmation
- Dynamic loading of family members

## License
MIT License
