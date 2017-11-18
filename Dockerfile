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
    apt-get autoremove

# Create a nonroot user, and switch to it
RUN  /usr/sbin/useradd --create-home --home-dir /home/node --shell /bin/bash node 
RUN chown -R node /usr/src

# Switch to our nonroot user
USER node

RUN mkdir /home/node/.npm-global
ENV HOME /home/node
ENV NODE_PATH /home/node/node_modules
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

WORKDIR /home/node

RUN npm install -g typescript types tslint karma-cli grunt-cli gulp-cli @angular/cli

EXPOSE 8080

ENTRYPOINT [ "bash" ]