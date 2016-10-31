import jss, {create} from 'jss'
import {version as presetVersion} from 'jss-preset-default/package.json'
import {version as expandVersion} from 'jss-expand/package.json'
import extend from 'jss-extend'
import nested from 'jss-nested'
import camelCase from 'jss-camel-case'
import defaultUnit from 'jss-default-unit'
import vendorPrefixer from 'jss-vendor-prefixer'
import propsSort from 'jss-props-sort'
import compose from 'jss-compose'
import expand from 'jss-expand'

export const versions = {
  jss: jss.version,
  preset: presetVersion,
  expand: expandVersion
}

export const setup = (options = {}) => ({
  plugins: [
    extend(options.extend),
    nested(options.nested),
    camelCase(options.camelCase),
    defaultUnit(options.defaultUnit),
    expand(options.expand),
    vendorPrefixer(options.vendorPrefixer),
    propsSort(options.propsSort),
    compose(options.compose)
  ]
})

export default create(setup())
