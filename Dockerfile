FROM node:17-alpine3.14
WORKDIR /usr/src/app
COPY . ./
RUN npm i
RUN npm run build
EXPOSE 3030
CMD ["npm", "start"]