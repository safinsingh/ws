export const socials = {
	TWITTER: 'https://twitter.com/safinsingh',
	GITHUB: 'https://github.com/safinsingh/',
	LINKEDIN: 'https://linkedin.com/in/safinsingh/'
}

const omitTabs = (input: string) => {
	return input.replace(/\t/g, '')
}

export const gqlQuery = omitTabs(`query {
	repositoryOwner(login: "safinsingh") {
		... on ProfileOwner {
		pinnedItemsRemaining
			itemShowcase {
				items(first: 6) {
					edges {
						node {
							...on Repository {
								name
								url
							}
						}
					}
				}
			}
		}
	}
}`)
