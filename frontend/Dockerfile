# Use the official Node.js 20.9.0 image as a parent image
FROM node:20.9.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock
COPY yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of your application code into the container
COPY . .

# Vite uses port 3000 by default, but here we set it to use port 5173
EXPOSE 5173

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

# Command to run the application using Vite in development mode
CMD ["yarn", "dev"]
