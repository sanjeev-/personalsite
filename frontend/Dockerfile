# Use an official node runtime as a parent image
FROM node:12

WORKDIR /app/frontend

# Install dependencies
# install app dependencies
COPY package.json .
# COPY package-lock.json .
RUN npm cache clean -f
RUN npm install 
RUN npm install react-scripts@3.4.1 -g
RUN npm update coppola

# Add rest of the client code
COPY . .


EXPOSE 3000

# start app
CMD ["npm", "start"]