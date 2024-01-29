# adonisJs V5 template

## Local development

### Prerequisites

- [node](https://nodejs.org/) v21
- [yarn](https://yarnpkg.com/) v4 (stable)

Suggestion: use [volta](https://volta.sh/) or [nvm](https://github.com/nvm-sh/nvm)

### Add .env file

Copy `.env.example` to `.env` and fill it with your data.

```
$ cp .env.example .env
```

### Yarn install

```
$ yarn
```

### Yarn IDE autocomplete and code checking

- vs code

```
$ yarn dlx @yarnpkg/sdks vscode
```

- other IDE (todo)

###

### Docker compose

```
$ docker compose up -d
```

### Run tests with docker

```
$ yarn test:docker
```

Optionally run locally:

```
$ yarn test
```

### Format project code

```
$ yarn format
```

### Lint code

```
$ yarn lint
```
