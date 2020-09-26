# Use an official node runtime as a parent image
FROM node:8

WORKDIR /app/frontend

# Install dependencies
# install app dependencies
COPY package.json .
# COPY package-lock.json .

RUN npm install 
RUN npm install react-scripts@3.4.1 -g

# Add rest of the client code
COPY . .

# Print out directory structure
RUN echo $(ls -1 .)

EXPOSE 3000

# start app
CMD ["npm", "start"]