const gqlQuery = (username) => {
	return `query {
	repositoryOwner(login: "${username}") {
	  ... on ProfileOwner {
		 pinnedItemsRemaining
		 itemShowcase {
			items(first: 6) {
			  edges {
				 node {
					... on Repository {
					  name
					  description
					  url
					  primaryLanguage {
						 name
					  }
					}
				 }
			  }
			}
		 }
	  }
	}
 }`
}

export const endpoint = async () => {
	const projects = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${process.env.TOKEN}`,
		},
		body: JSON.stringify({
			query: gqlQuery('safinsingh'),
		}),
	})

	const ret = await projects.json()

	return {
		props: {
			projects: ret.data.repositoryOwner.itemShowcase.items.edges,
		},
	}
}
