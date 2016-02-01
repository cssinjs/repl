import jss from 'jss'
import extend from 'jss-extend'
import nested from 'jss-nested'
import camelCase from 'jss-camel-case'
import defaultUnit from 'jss-default-unit'
import vendorPrefixer from 'jss-vendor-prefixer'

jss.use(extend())
jss.use(nested())
jss.use(camelCase())
jss.use(defaultUnit())
jss.use(vendorPrefixer())

export default jss
