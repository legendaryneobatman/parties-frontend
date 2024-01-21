FROM node:16-alpine as builder
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN npm ci && npm cache clean --force
ADD . /app
RUN npm run build
ENV HOST 0.0.0.0
EXPOSE 8000


FROM nginx:latest
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
