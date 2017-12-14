FROM ubuntu:latest

RUN apt-get update && \
    apt-get install -y apt-utils curl \
     && \
    curl -sL https://deb.nodesource.com/setup_8.x | bash -

RUN apt-get install -y \
      nodejs \
      build-essential \
      wget \
      git \
      telnet \
      vim \
      sudo \
      emacs \
      aptitude \
     && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
     && \
    apt-get autoclean

# Create a nonroot user, and switch to it
RUN useradd --create-home --home-dir /home/node --shell /bin/bash node && \
    chown -R node /usr/src && \
    echo "root:Docker!" | chpasswd && \
    mkdir /home/node/.npm-global && \
    chown -R node /home/node && \
    npm config set prefix /home/node/.npm-global

# Switch to our nonroot user
USER node

ENV HOME /home/node
ENV NODE_PATH /usr/src/app
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

WORKDIR /usr/src/app

RUN npm install -g typescript types tslint karma-cli grunt-cli gulp-cli @angular/cli jshint

EXPOSE 8080

ENTRYPOINT [ "bash" ]