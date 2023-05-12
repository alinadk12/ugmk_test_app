# pull the base image
FROM node:18-alpine AS builder

# set the working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY package-lock.json ./

RUN npm ci

# add app
COPY . ./

RUN npm run build

EXPOSE 3000

# start app
CMD ["npm", "start"]
