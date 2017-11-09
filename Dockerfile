FROM node:8

EXPOSE 8888

# global no
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

# run unprivileged
USER node
