**Model repository** is the FAR-EDGE component that provides the mechanisms to manage:

* Data Kinds (DK)
* Data Interfaces (DI)
* Data Source Definitions (DSD)
* Analytics Processor Definitions (APD)

### REQUIREMENTS

* [MongoDB](https://www.mongodb.com/) >= *3.6.4*
* [Node.js](https://nodejs.org/) >= *10.1.0*
* [npm](https://www.npmjs.com/) >= *5.6.0*
* [Docker CE](https://www.docker.com/community-edition) >= 18.03.1 *(optional)*
* [Docker Compose](https://docs.docker.com/compose/) >= 1.21.0 *(optional)*

### CLONE

    git clone git@github.com:far-edge/cloud-infrastructure.git

### CONFIGURE

Create `.env` based on `.env.example`.

    cp .env.example .env

Edit `.env`.

### WORK WITH DOCKER

#### RUN

    cd cloud-infrastructure/model-repository
    docker-compose up

### WORK WITHOUT DOCKER

#### CREATE THE VIRTUAL ENVIRONMENT

    cd cloud-infrastructure/model-repository
    nodeenv -n 10.1.0 --prebuilt env

#### ACTIVATE THE VIRTUAL ENVIRONMENT

    . env/bin/activate

#### INSTALL THE DEPENDENCIES

    npm install

#### RUN

    npm start

#### DEACTIVATE THE VIRTUAL ENVIRONMENT

    deactivate_node

#### LINT

    npm run lint

#### TEST

    npm test

#### GENERATE THE DOCUMENTATION

    npm run doc
