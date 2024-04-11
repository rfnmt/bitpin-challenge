# BitPin Front-End Test Using React + TypeScript + Vite

to start project, run:

```
yarn start
```

## Checklist

- [x] List of markets in first page
- [x] Showing tether and rial markets in separated tabs
- [x] Showing each market in a separated card
- [x] Market details page
- [x] Showing details for buy, sell and transactions in separated tabs
- [x] Dark mode

# Project Overview

Two pages for showing the crypto markets and details of that market

## Git

- commits follow the `Conventional Commits` rules.
- Fot more details, see **here**[https://www.conventionalcommits.org/en/v1.0.0/]

## Bundler

- This project utilizes `Vite` as its bundler.
- The Vite configuration is modular and maintainable, written using native ESM modules for ease of use & more speed.

## Styling

- Styling in this project is achieved through the use of `tailwind css`.

## APIs

- The project relies on the `Axios` package API for handling API requests.

- The API structure consists of three main parts:
  1. **API service:** Where we initiate Axios config.
  2. **Request Functions:** functions on top of axios methods to handle each request separately.
  3. **useAPI Hook:** A utility hook that simplifies using the `Request Functions` in a declarative manner.
