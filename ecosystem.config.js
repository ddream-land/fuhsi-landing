module.exports = {
    apps: [
        {
            name: 'Pangu-Network',
            port: '3002',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs',
            autorestart: true,
            watch: true,
            max_memory_restart: '1G'
        }
    ]
}
