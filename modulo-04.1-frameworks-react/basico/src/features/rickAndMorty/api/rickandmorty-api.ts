export interface Character {
  id: number
  name: string
  image: string
  status: string
  species: string
}

export const getCharacters = async (
  page: number = 1,
  search?: string
): Promise<Character[]> => {
  let url = `https://rickandmortyapi.com/api/character?page=${page}`
  if (search) {
    url += `&name=${search}`
  }

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to fetch characters: ${response.statusText}`)
  }

  const data = await response.json()
  return data.results || []
}