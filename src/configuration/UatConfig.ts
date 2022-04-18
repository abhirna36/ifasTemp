import { AppEnvironmentEnum } from '../constants/enum'

const uatConfig = {
  environment: AppEnvironmentEnum.PRODUCTION,
  apis: {
    apiBaseUrl: 'https://example.com/',
    webBaseUrl: 'https://dev.example.com/'
  }
}

export default uatConfig
