FROM oven/bun:canary-slim as builder
WORKDIR /app
COPY package.json /app/
COPY bun.lockb /app/
RUN bun install
ADD . /app
RUN bun run build

FROM nginx:1.19

RUN rm -f /etc/nginx/conf.d/default.conf
COPY .nginx/nginx.conf /etc/nginx/conf.d

RUN chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d

RUN touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

USER nginx

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8000
