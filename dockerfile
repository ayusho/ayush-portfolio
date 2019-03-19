# base image
FROM node:10.15.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
# RUN npm install react-scripts@2.1.5 -g

COPY . ./

RUN npm run build

# start app
CMD ["npm", "start"]