**Model repository** is the FAR-EDGE component that provides the mechanisms to manage:

* Data Kinds (DK)
* Data Interfaces (DI)
* Data Source Definitions (DSD)
* Analytics Processor Definitions (APD)

### REQUIREMENTS

* [MongoDB](https://www.mongodb.com/) >= *3.6.4*
* [Node.js](https://nodejs.org/) >= *10.0.0*
* [npm](https://www.npmjs.com/) >= *5.6.0*

### CLONE

    git clone git@github.com:far-edge/cloud-infrastructure.git

### CREATE THE VIRTUAL ENVIRONMENT

    cd cloud-infrastructure/model-repository
    nodeenv -n 10.0.0 env

### ACTIVATE THE VIRTUAL ENVIRONMENT

    . env/bin/activate

### INSTALL THE DEPENDENCIES

    npm install

### CONFIGURE

Create `.env` based on `.env.example`.

    cp .env.example .env

Edit `.env`.

### RUN

    npm start

### LINT

    npm run lint

### TEST

    npm test

### GENERATE THE DOCUMENTATION

    npm run doc

### DEACTIVATE THE VIRTUAL ENVIRONMENT

    deactivate_node
