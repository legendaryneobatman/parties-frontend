# Use a Node.js base image for development
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application code to the working directory
COPY . .

# Install project dependencies
RUN npm ci

# Expose the port your Vue.js app is listening on (default is 8080)
EXPOSE 3000

# Start the Vue.js development server
CMD ["npm", "run", "dev"]
