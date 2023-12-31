import moduleAlias from 'module-alias'
import * as path from 'path'

const files = path.resolve(__dirname, '../../')

moduleAlias.addAliases({
  '@src': path.join(files, 'src'),
  '@text': path.join(files, 'test'),
})