import ProdConfig from './ProdConfig'
import UatConfig from './UatConfig'

const isProductionEnvironment = false
const isUatEnvironment = true

export default isProductionEnvironment
  ? ProdConfig
  : UatConfig
