FROM node:10-slim

RUN apt-get update -qq && \
    apt-get install -y build-essential

COPY . /vue-redtube

WORKDIR /vue-redtube

ENTRYPOINT ["sh", "scripts/start.sh"]
