import convict from 'convict'

export const appConfig = convict({
  port: {
    format: Number,
    default: 3000,
    env: 'API_APP_PORT',
  },
  authorizedReferrers: {
    format: Array,
    doc: 'List of authorized referrers allowed to access this web service',
    env: 'API_AUTHORIZED_REFERRERS',
    default: [],
  },
})

appConfig.validate({allowed: 'strict'})
