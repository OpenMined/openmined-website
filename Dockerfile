FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .
RUN npm run build

EXPOSE 8080
CMD [ "npm", "serve:prod" ]
