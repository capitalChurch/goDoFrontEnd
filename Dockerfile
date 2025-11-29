FROM node:12.16.2 as build
WORKDIR /app
COPY . . 

ENV PUBLIC_URL=/go-and-do

RUN npm install --silent
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html/go-and-do/
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
