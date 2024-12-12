# Use Node.js LTS version
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies with fallback to npm install
RUN if [ -f package-lock.json ]; then \
        npm ci --only=production; \
    else \
        npm install --only=production; \
    fi

# Copy app source
COPY . .

# Expose port
EXPOSE 3000

# Start the server
CMD [ "node", "server.js" ]
