FROM node:alpine as builder
WORKDIR '/app'
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install 
COPY . .
Run npm run build

FROM nginx:alpine
EXPOSE 3000
COPY ./prod.nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
