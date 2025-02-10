# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy application files
COPY . .

# Build the application
RUN yarn build

# Install `serve` globally to serve the built app
RUN yarn global add serve

# Expose port (assuming the app runs on port 3000)
EXPOSE 3000

# Start the application using `serve`
CMD ["serve", "-s", "build"]

