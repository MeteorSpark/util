Package.describe({
  name: 'meteorspark:util',
  summary: 'Bring some of NodeJS util functionality to the Meteor client',
  version: '0.1.0',
  git: 'https://github.com/MeteorSpark/util'
});

both = ['server', 'client'];
server = 'server';
client = 'client';

Package.onUse(function (api) {
  api.versionsFrom('0.9.4');

  api.add_files('lib/util.js', client);

  api.export('Util');
});
