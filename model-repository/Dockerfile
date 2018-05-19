FROM node:10.1.0

RUN mkdir -p /faredge/model-repository
WORKDIR /faredge/model-repository

COPY package.json /faredge/model-repository
COPY package-lock.json /faredge/model-repository
RUN npm install

COPY . /faredge/model-repository

EXPOSE ${PORT}

CMD [ "npm", "start" ]
