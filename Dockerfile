FROM node:20
WORKDIR /home/app  
COPY . .
EXPOSE 2000
RUN npm install
CMD [ "node", "--watch", "app.js" ]
