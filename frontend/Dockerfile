# Use an official node runtime as a parent image
FROM node:8

WORKDIR /app/frontend

# Install dependencies
# COPY package.json yarn.lock /app/

RUN npm install

# Add rest of the client code
COPY . /app/frontend

CMD ls

EXPOSE 3000

CMD npm start