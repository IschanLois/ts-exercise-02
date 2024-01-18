import { Transform, TransformCallback } from 'node:stream'

import { LogEntry } from 'winston'

import { Character } from './Character.js'

export default new Transform({
  objectMode: true,
  transform(character: Character, encoding: BufferEncoding, callback: TransformCallback):void {
    callback(null, {
      level: 'info',
      message: character.name,
    } as LogEntry)
  },
})
