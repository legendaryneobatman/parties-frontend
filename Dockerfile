FROM node:16-alpine

WORKDIR /app

RUN apk --no-cache add openssh git

COPY package.json /app/

COPY package-lock.json /app/

RUN npm ci && npm cache clean --force

ADD . /app

RUN npm run build

COPY /app/dist /usr/share/nginx/html

ENV HOST 0.0.0.0

EXPOSE 8000
