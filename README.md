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

Although You _CAN_ build an image with `docker build`, we recommend using Docker Compose to easily manage local development setup.

```bash
docker-compose build # to build latest image
docker-compose up # start a live reload server at localhost:3000
```

##### Notes:

- When run using Docker Compose, a MongoDB container is also created. :wink:
- [mongo-express](https://github.com/mongo-express/mongo-express) UI is also exposed at http://localhost:3001 in a seperate Docker container.
- Live reloading is only enabled for `src/`. Any changes outside `src/` would require rebuilding the container.

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
