# uno_server_v1

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg?style=flat-square)](https://www.gnu.org/licenses/gpl-3.0) [![travis build](https://img.shields.io/travis/udyat-miet/uno_server_v1.svg?style=flat-square)](https://travis-ci.org/udyat-miet/uno_server_v1) [![codecov coverage](https://img.shields.io/codecov/c/github/udyat-miet/uno_server_v1.svg?style=flat-square)](https://codecov.io/gh/udyat-miet/uno_server_v1)

Please read [CONTRIBUTING](https://github.com/udyat-miet/uno_server_v1/blob/master/CONTRIBUTING.md) before attempting to work on this project. We follow a set of guidelines which include a specific commit message format. Violation of these guidelines will result in non-acceptance of your pull requests.

## Development setup

### Obtain source

Clone this repository and change current working directory to its root

```bash
git clone https://github.com/udyat-miet/uno_server_v1.git
cd uno_server_v1
```

### Building

#### Using Docker

Although You CAN build an image with `docker build`, we recommend using Docker Compose to easily manage local development server. _Simply because we're not savages!_

```bash
docker-compose up # starts a live reload server at port 3000
```

#### Using npm or yarn

##### Configure environment vars

```bash
touch .env
echo "NODE_ENV=development" >> .env
echo "TEST_DB_URI=mongodb://<user>:<pass>@localhost/<database>" >> .env
```

##### Start a local server

```bash
yarn # or npm install - to install all dependencies
yarn dev # or npm run dev - to run a local instance
```

## Deploying

### // TODO
