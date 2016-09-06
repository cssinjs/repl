import jss, {create} from 'jss'
import preset from 'jss-preset-default'
import {version as presetVersion} from 'jss-preset-default/package.json'

export const versions = {
  jss: jss.version,
  preset: presetVersion
}

export default create(preset())
