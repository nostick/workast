FROM node:current-alpine

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

EXPOSE 8001

CMD [ "npm", "start" ]
