import fetch, { Response } from 'node-fetch'

import { Character, Url } from './Character.js'

type SwapiUrl = Url<'people'> | null

type SwapiResponse = {
  results: Character[]
  next: SwapiUrl
}

export default async function* characterGenerator(url: SwapiUrl = 'https://swapi.dev/api/people/?page=1'):AsyncGenerator<Character, void, undefined> {
  const response: Response = await fetch(url)
  const { results, next }: SwapiResponse  = await response.json() as SwapiResponse

  yield* results

  if (next !== null) {
    yield* characterGenerator(next)
  }
}
