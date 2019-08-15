# SPOTAROOM

## How to run the app?

To run the app: 
```bash
  npm run dev
```

## How to deploy the app?

To deploy the app use the following command:
```bash
  npm run build
```
This will create a production ready file that can be deployed on 
any server.

## Decisions

The first decision I made was to use React and Sass for the 
frontend and create an small express server for the backend.
The next decision was to use Parcel bundler instead Webpack. 
I prefer Parcel for small projects because it not need 
configuration, also having limited time I don't want to spend
a lot of it configuring Webpack.
Another decision I took was not adding much unit test, I think
there is few 