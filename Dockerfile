FROM nginx:stable-alpine AS base
WORKDIR /app
EXPOSE 80

FROM node:16.5.0-stretch-slim AS build
WORKDIR /src
COPY ./ /src
RUN npm config set registry https://registry.npm.taobao.org
RUN npm i
RUN npm run build

FROM base AS simple-web
WORKDIR /app
COPY --from=build /src/build /wwwroot/
COPY ./conf.d/ /etc/nginx/conf.d/ 