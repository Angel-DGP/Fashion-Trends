FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4200
CMD ["npm", "start". "--", "--host", "0.0.0.0"]

#docker build -t Angel-DGP/invoice-backend:1.0 .

#docker push Angel-DGP/invoice-backend:1.0

#docker pull Angel-DGP/invoice-backend:1.0

#docker run -d --name probe1 -p 4000:4200 fashion-trends:v1.1