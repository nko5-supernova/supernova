## Boilerplate

Starting boilerplate for React, Redux, Webpack and Babel from https://github.com/chentsulin/redux-boilerplate

### Vote KO Widget

![Vote KO widget](http://f.cl.ly/items/1n3g0W0F0G3V0i0d0321/Screen%20Shot%202012-11-04%20at%2010.01.36%20AM.png)

Use our "Vote KO" widget to let from your app directly. Here's the code for
including it in your site:

~~~html
<iframe src="http://nodeknockout.com/iframe/supernova" frameborder=0 scrolling=no allowtransparency=true width=115 height=25>
</iframe>
~~~

## Development
```shell
npm install
```

## Deploy

Deploying to Modulus (to http://supernova.2015.nodeknockout.com/)

```shell
npm run modulus-login
npm run modulus-deploy
```

## Logs

View the most recent logs from modulus

```shell
npm run modulus-login
npm run modulus-logs
```