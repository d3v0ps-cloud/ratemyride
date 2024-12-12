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
- RESTful API for programmatic access

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
- GitHub Actions for CI/CD
- GitHub Container Registry

## Setup and Installation

### Using Pre-built Container
1. Pull the container image:
   ```bash
   docker pull ghcr.io/[your-github-username]/ratemyride:latest
   ```
2. Create a `.env` file with required environment variables
3. Run the container:
   ```bash
   docker run -p 3000:3000 --env-file .env ghcr.io/[your-github-username]/ratemyride:latest
   ```

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

## API Documentation

### GET /api/family-members
Returns the list of configured family members.

#### Request
```http
GET /api/family-members
```

#### Response
```json
{
  "familyMembers": ["Mum", "Dad", "Oliver", "Jack", "Other"]
}
```

#### Example
```bash
curl http://localhost:3000/api/family-members
```

### POST /submit
Submits a new review.

#### Request
- Content-Type: `application/x-www-form-urlencoded` or `multipart/form-data`

#### Parameters
| Name | Type | Required | Description |
|------|------|----------|-------------|
| family_member | string | Yes | The name of the family member submitting the review |
| driver | string | Yes | The name of the driver being reviewed |
| rating | number | Yes | Rating from 1 to 5 |
| comment | string | No | Additional comments about the ride |

#### Response
- Success: Text response with "Thank you for your review!"
- Error: Text response with error message

#### Example using cURL
```bash
curl -X POST http://localhost:3000/submit \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "family_member=Dad" \
  -d "driver=Mum" \
  -d "rating=5" \
  -d "comment=Great driving!"
```

#### Example using JavaScript Fetch
```javascript
fetch('http://localhost:3000/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({
    family_member: 'Dad',
    driver: 'Mum',
    rating: '5',
    comment: 'Great driving!'
  })
})
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.error('Error:', error));
```

#### Error Responses
- 400 Bad Request: Missing required fields
- 500 Internal Server Error: Failed to send to Discord

## Container Images

The application is automatically built and published to GitHub Container Registry using GitHub Actions.

### Available Tags
- `latest`: Latest build from the main branch
- `vX.Y.Z`: Release versions (e.g., v1.0.0)
- `vX.Y`: Minor version tags (e.g., v1.0)
- `sha-XXXXXXX`: Specific commit builds

### CI/CD Pipeline
The GitHub Actions workflow automatically:
1. Builds the Docker image
2. Runs tests (if any)
3. Publishes to GitHub Container Registry on:
   - Pushes to main branch
   - Release tags (v*)
4. Generates appropriate tags and labels

## Project Structure

```
ratemyride/
├── .github/
│   └── workflows/        # GitHub Actions workflows
│       └── docker-build.yml
├── public/
│   └── index.html       # Frontend interface
├── server.js            # Express server and API endpoints
├── package.json         # Project dependencies
├── Dockerfile           # Docker image configuration
├── docker-compose.yml   # Docker Compose configuration
├── .env.example         # Example environment variables
└── README.md           # Documentation
```

## Environment Variables

The application requires the following environment variables:

- `DISCORD_WEBHOOK_URL`: The webhook URL for your Discord channel
- `FAMILY_MEMBERS`: Comma-separated list of family members (e.g., "Mum,Dad,Oliver,Jack,Other")

These can be configured by:
1. Creating a `.env` file based on `.env.example`
2. Setting the variables in your environment
3. Passing them through Docker Compose

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
