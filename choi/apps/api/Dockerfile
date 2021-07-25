# BASE IMAGE (37.4MB)
# ------------------------------------------------------------------------------------
FROM alpine:3.11 AS base
ARG NODEJS_VER=12
ENV NODEJS_VER=$NODEJS_VER
ARG TINI_VER=0.18
ENV TINI_VER=$TINI_VER

RUN apk add --no-cache nodejs~="$NODEJS_VER" tini~="$TINI_VER"
RUN addgroup -g 1001 -S app && adduser -u 1001 -S app -G app

# DEV APP IMAGE (? MB)
# ------------------------------------------------------------------------------------
FROM base as dev
ENV SHELL=/bin/sh
RUN apk add --no-cache \
  curl~=7.67 \
  npm~="$NODEJS_VER"
WORKDIR /usr/src
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY workspace.json ./
COPY nx.json ./
COPY tsconfig*.json ./
# COPY libs/api ./libs/api
COPY libs/shared ./libs/shared
COPY apps/api/tsconfig*.json ./apps/api/
COPY apps/api/src ./apps/api/src
ENTRYPOINT ["/sbin/tini", "-v", "--"]
CMD ["npx", "nx", "serve", "api"]
