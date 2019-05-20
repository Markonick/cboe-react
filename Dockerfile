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
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 8080
CMD ["sudo nginx", "-g", "daemon off;"]