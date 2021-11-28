FROM node:16-alpine

WORKDIR /usr/app

COPY ./ /usr/app

ENV NODE_ENV=production

RUN [ "npm" , "install"]

RUN ["npm" , "run" , "build"]

CMD ["npm" , "start"]