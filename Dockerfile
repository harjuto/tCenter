FROM node:argon

#Create app directory
RUN mkdir -p /usr/src/app

##Build client
COPY ./client/src /usr/src/app/client/src
COPY ./client/package.json /usr/src/app/client/package.json
COPY ./client/webpack.config.js /usr/src/app/client/webpack.config.js
WORKDIR /usr/src/app/client
RUN npm install
RUN npm install -g webpack
run webpack

##Copy is basically same as ADD, but ADD can handle urls and stuff
COPY ./server/package.json /usr/src/app/server/package.json

WORKDIR /usr/src/app/server
##Install dependencies
RUN npm install

##Bundle app source
COPY /server /usr/src/app/server

EXPOSE 8080
CMD ["node", "index.js"]
