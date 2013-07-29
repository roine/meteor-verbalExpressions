Package.describe({
  summary: "Latest version of verbalExpressions.js packaged for meteor"
});

Package.on_use(function (api){
  api.add_files('lib/verbalExpressions.js', ['client', 'server']);
});
