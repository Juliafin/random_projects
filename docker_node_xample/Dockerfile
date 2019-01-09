# Use the node baseimage containing the linux subsystem with node installed
FROM node:latest

# Specify the working directory in the container to copy our files to
WORKDIR /home/node/app

# Copy the files
COPY . .

# Specify any environment variables
ENV NODE_ENV="Production"

# Install express (plus any other dependencies)
RUN npm install express nodemon mongoose

# Expose port 9001 from inside the container to the outside world
EXPOSE 9001

# The command that will start the server
CMD ["npm", "start"]