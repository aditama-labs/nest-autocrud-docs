FROM node:20-alpine AS build

WORKDIR /app
COPY . /app/

RUN npm install
RUN npm run build:prod

FROM caddy:2.8.4-alpine AS web

LABEL org.opencontainers.image.source https://github.com/aditama-labs/nest-autocrud-docs

COPY caddy/Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /srv
