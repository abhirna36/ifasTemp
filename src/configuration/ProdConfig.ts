import { AppEnvironmentEnum } from '../constants/enum'

const ProdConfig = {
  environment: AppEnvironmentEnum.PRODUCTION,
  apis: {
    apiBaseUrl: 'https://example.com/',
    webBaseUrl: 'https://dev.example.com/'
  }
}

export default ProdConfig
