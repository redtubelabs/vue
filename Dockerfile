FROM node:8.14.0-alpine

RUN apk add --update build-base && \
    npm install -g @vue/cli && \
    npm install -g @vue/cli-service-global

COPY . /vue-redtube

WORKDIR /vue-redtube

RUN npm install
