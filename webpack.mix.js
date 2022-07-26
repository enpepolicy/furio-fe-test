const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

mix.webpackConfig({
    plugins: [
        new NodePolyfillPlugin({
            excludeAliases: ['console']
        })
    ]
});

mix
  .ts("resources/ts/app.ts", "public/js")
  .vue({ version: 3 })
  .sass('resources/css/app.scss', 'public/css') 
  .options({ 
      processCssUrls: false,
      postCss: [tailwindcss('./tailwind.config.js')]
  });

//   .postCss("resources/css/app.css", "public/css", [require("tailwindcss")]);