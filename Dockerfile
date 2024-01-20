FROM node:16-alpine

WORKDIR /app

RUN apk --no-cache add openssh git

COPY package.json /app/

COPY package-lock.json /app/

RUN npm ci && npm cache clean --force

ADD . /app

RUN npm run build

ENV HOST 0.0.0.0

EXPOSE 8000


FROM nginx:1.21-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY sites-available/parties-frontend /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
