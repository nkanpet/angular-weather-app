# Base image
FROM node:14.18.0-alpine3.14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build --prod

# Expose port 80
EXPOSE 8010

# Run the Angular application
CMD ["npm", "run", "start"]
