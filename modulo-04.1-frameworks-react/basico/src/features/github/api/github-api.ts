export interface MemberEntity {
  id: string
  login: string
  avatar_url: string
}

export const getMembers = async (
  organization: string,
  page: number = 1,
  perPage: number = 10
): Promise<MemberEntity[]> => {
  const response = await fetch(
    `https://api.github.com/orgs/${organization}/members?page=${page}&per_page=${perPage}`
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch members: ${response.statusText}`)
  }

  return response.json()
}