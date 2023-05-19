<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Description

This project consists of implementing two endpoints to manage members and their accumulated points. The details of each endpoint are described below:

<br/>

### GET /member/{MEMBER_ID}

This endpoint allows identifying a member using their identifier (`MEMBER_ID`). The response is structured as follows:

- If the `MEMBER_ID` is valid, the endpoint will respond with a `StatusCode: 200` and a JSON object with the following structure:

  ```json
  {
    "name": "Paco Porras",
    "points": 6,
    "discount": 0
  }
  ```

  Where:

  - `name` represents the name of the member.
  - `points` indicate the number of accumulated points so far.
  - `discount` is the discount applicable to the next purchase.

- If the `MEMBER_ID` is not valid, the endpoint will respond with a `StatusCode: 404`.

<br/>

### POST /member/{MEMBER_ID}

This endpoint allows increasing the available points for a member. It expects to receive a JSON object in the following format:

```json
{
  "amount": 150.0
}
```

Where `amount` indicates the amount of the purchase made by the member.

The response is defined as follows:

- If the `MEMBER_ID` is valid, the member's points balance will be incremented, and the endpoint will respond with a `StatusCode: 200`.

- If the `MEMBER_ID` is not valid, the endpoint will respond with a `StatusCode: 404`.

<br/>

### Additional Considerations

- Valid `MEMBER_ID` corresponds to the unique identifiers assigned to each member.

Thank you for using this project! If you have any questions or need further information, please don't hesitate to contact me.

<br/>

# Installation

```bash
$ yarn install
```

Rename file .env.template to .env, and change the environment variables as you wish.

<br/>

# Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

<br/>

# Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

<br/>

# License

Nest is [MIT licensed](LICENSE).
