FROM node:latest

# ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN apt-get update && apt-get upgrade -y && apt-get install -y \
  apt-utils \
  git \
  less \
  vim \
  telnet

EXPOSE 8080

CMD [ "npm", "install" ]