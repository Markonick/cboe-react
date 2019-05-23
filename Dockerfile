#fuck - put your pants on - hmmm ok fuck off
# ....................../´¯/) 
# ....................,/¯../ 
# .................../..../ 
# ............./´¯`/'...'/´¯¯`·¸ 
# ........../'/.../..../......./¨¯\ 
# ........('(....´....´.... ¯~/'...') 
# .........\.................'...../ 
# ...........\................ _.·´ 
# ............\..............( 
# ..............\.............\...
# build environment
FROM node:12.2.0-alpine as build
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html

#from https://mherman.org/blog/dockerizing-a-react-app/
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/conf.d
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

#from http://coding-karma.com/2018/10/14/docker-deployment-angular-5-application-to-heroku/
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'

# heroku create
# heroku container:push web --app {app_name}
# heroku container:release web --app {app_name}