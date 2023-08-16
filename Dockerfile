FROM node:19.9.0

# Create app directory
WORKDIR /usr/src/app

# Copy dist folder
COPY dist .

# Install app dependencies
RUN npm install serve -g --silent

# Run app
CMD ["serve", "-l", "3000"]