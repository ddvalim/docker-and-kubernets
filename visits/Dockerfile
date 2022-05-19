# Set container base image
FROM node:alpine

# Defines container working directory
WORKDIR /home/node/app

# Copy dependencies file
COPY ./package.json /home/node/app

# Install all project dependencies
RUN npm install

# Copy to working directory project files
COPY ./ /home/node/app

# Start server
CMD ["npm", "start"]