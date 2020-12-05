import type { NextApiRequest, NextApiResponse } from 'next'

import { gqlQuery } from '~/constants'
import { ProjectProps } from '~/types'

export const graphql = async () => {
	const projects = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${process.env.TOKEN}`
		},
		body: JSON.stringify({
			query: gqlQuery
		})
	})

	const ret = await projects.json()

	return {
		props: {
			projects: ret.data.repositoryOwner.itemShowcase.items.edges
		}
	} as ProjectProps
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json((await graphql()).props.projects)
}
