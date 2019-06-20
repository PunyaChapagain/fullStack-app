// not using its inculded in compose file because of production and dev file being same

FROM nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf