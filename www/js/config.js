require.config({
  baseUrl: '/js',
  shim: {
    "bootstrap" :  ['jquery']
  },
  paths: {
    bootstrap: 'libs/bootstrap/dist/js/bootstrap',
    jquery: 'libs/jquery/dist/jquery',
    modernizr: 'libs/modernizr/modernizr',
    requirejs: 'libs/requirejs/require'
  },
  packages: [

  ],
  deps: [
    'bootstrap',
    'jquery',
    'modernizr',
    'requirejs'
  ]
});
