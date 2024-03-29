/* global Package */
Package.describe({
    name: 'socialize:voteable',
    summary: 'A package for implementing social up/down style voting',
    version: '1.0.4',
    git: 'https://github.com/copleykj/socialize-voteable.git',
});

Package.onUse(function _(api) {
    api.versionsFrom(['1.10.2', '2.3']);

    api.use([
        'socialize:linkable-model@1.0.6',
        'socialize:user-blocking@1.0.6',
        'reywood:publish-composite@1.7.3',
    ]);

    api.imply('socialize:linkable-model');

    api.mainModule('server/server.js', 'server');
    api.mainModule('common/common.js', 'client');
});
