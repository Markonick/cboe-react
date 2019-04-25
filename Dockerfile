# build stage
FROM node:latest as react-build
WORKDIR /app
COPY . ./
RUN npm run build

# production stage
FROM nginx:latest as production-stage
COPY --from=react-build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

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
