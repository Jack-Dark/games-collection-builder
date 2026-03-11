import postgresPlugin from 'vite-plugin-neon-new'
export default postgresPlugin({
  seed: {
    type: 'sql-script',
    path: 'db/init.sql',
  },
  referrer: 'create-tanstack',
  dotEnvKey: 'VITE_DATABASE_URL',
})
