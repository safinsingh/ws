const socials = {
	TWITTER: 'https://twitter.com/safinsingh',
	GITHUB: 'https://github.com/safinsingh/',
	LINKEDIN: 'https://linkedin.com/in/safinsingh/'
}

const omitTabs = (input: string) => input.replace(/\t/g, '')

const gqlQuery = omitTabs(`
query {
	repositoryOwner(login: "safinsingh") {
		... on ProfileOwner {
			pinnedItemsRemaining
			itemShowcase {
				items(first: 6) {
					edges {
						node {
							... on Repository {
								name
								url
							}
						}
					}
				}
			}
		}
	}
}
`)

const smallCursorOffset = 3
const largeCursorOffset = 15
const largeCursorFollowRate = 70
const cursorInitPos = 250

export {
	socials,
	gqlQuery,
	smallCursorOffset,
	largeCursorOffset,
	largeCursorFollowRate,
	cursorInitPos
}
