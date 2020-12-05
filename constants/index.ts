export const socials = {
	TWITTER: 'https://twitter.com/safinsingh',
	GITHUB: 'https://github.com/safinsingh/',
	LINKEDIN: 'https://linkedin.com/in/safinsingh/'
}

export const gqlQuery = `query {
	repositoryOwner(login: "safinsingh") {
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
