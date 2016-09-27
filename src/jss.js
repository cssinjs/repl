import jss, {create} from 'jss'
import preset from 'jss-preset-default'
import {version as presetVersion} from 'jss-preset-default/package.json'

export const versions = {
  jss: jss.version,
  preset: presetVersion
}

import extend from 'jss-extend'
import nested from 'jss-nested'
import camelCase from 'jss-camel-case'
import defaultUnit from 'jss-default-unit'
import vendorPrefixer from 'jss-vendor-prefixer'
import propsSort from 'jss-props-sort'
import compose from 'jss-compose'

export const setup = (options = {}) => ({
  plugins: [
    extend(options.extend),
    nested(options.nested),
    camelCase(options.camelCase),
    defaultUnit(options.defaultUnit),
    vendorPrefixer(options.vendorPrefixer),
    propsSort(options.propsSort),
    compose(options.compose)
  ]
})


export default create(setup())
