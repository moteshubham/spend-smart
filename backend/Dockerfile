# Use the specified Node.js version
FROM node:20.9.0-alpine3.18

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY yarn.lock ./

# Install dependencies defined in package.json
RUN yarn install

# Install Prisma globally using Yarn
RUN yarn global add prisma

# If you are building your code for production, use the following instead:
# RUN yarn install --frozen-lockfile

# Bundle the source code inside the Docker image
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Run Prisma migrations, seed the database, and start the application
COPY ./entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod 777 /usr/src/app/entrypoint.sh
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
# COPY entrypoint.sh /entrypoint.sh
# RUN chmod +x /entrypoint.sh
# ENTRYPOINT ["/entrypoint.sh"]
# ENTRYPOINT ["/usr/src/app/entrypoint.sh"]

CMD ["yarn", "run", "dev"]
