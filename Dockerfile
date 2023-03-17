#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build-storybook

#stage 2
FROM nginx:alpine
COPY --from=node /app/storybook-static /usr/share/nginx/html
