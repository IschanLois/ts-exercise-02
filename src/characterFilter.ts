import { Transform, TransformCallback } from 'node:stream'

import { Character } from './Character.js'

export default new Transform({
  objectMode: true,
  transform(character: Character, encoding: BufferEncoding, callback: TransformCallback):void {
    if (character.gender !== 'female') {
      callback()
      return
    }

    callback(null, character)
  },
})
