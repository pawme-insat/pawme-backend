FROM node:16-alpine

WORKDIR /usr/app


#  build app with all dependencies
COPY ./ /usr/app
RUN [ "npm" , "install"]
RUN ["npm" , "run" , "build"]

# clean up old dependencies and re install only needed one to run the app
RUN ["rm" , "-rf" , "node_modules"]
ENV NODE_ENV=production
RUN [ "npm" , "install"]

CMD ["npm" , "start"]