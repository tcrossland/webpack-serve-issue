Example for https://github.com/webpack/webpack-cli/issues/1976, possibly related to:
 * https://github.com/webpack/webpack-dev-server/issues/2770
 * https://github.com/webpack/webpack-cli/issues/1948

Documentation [here](https://webpack.js.org/api/cli/#default-configurations) states:
> Default Configurations
> ----------------------
> 
> CLI will look for some default configurations in the path of your project, here are the config files picked up by CLI.
>
> If no `mode` is supplied via flags or config then this is the lookup order in increasing order
> 
> example - config file lookup will be in order of `.webpack/webpack.config.development.js` > `webpack.config.development.js` > `webpack.config.js`
>
> ```'webpack.config',
> 'webpack.config.dev',
> 'webpack.config.development',
> 'webpack.config.prod',
> 'webpack.config.production',
> '.webpack/webpack.config',
> '.webpack/webpack.config.none',
> '.webpack/webpack.config.dev',
> '.webpack/webpack.config.development',
> '.webpack/webpack.config.prod',
> '.webpack/webpack.config.production',
> '.webpack/webpackfile',
> ```
> If `mode` is supplied, say `production` then config looking order will be -
>
> `.webpack/webpack.config.production.*` > `.webpack/webpack.config.prod.*` > `webpack.config.production.*` > `webpack.config.prod.*` > `webpack.config.*`

How to reproduce issue:

`npx webpack --mode development serve`

Look at http://localhost:8080/

Workaround using explicit `--config`:

`npx webpack server --config webpack.config.dev.js`
