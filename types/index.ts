export interface Project {
	node: {
		url: string
		name: string
		primaryLanguage: {
			name: string
		}
		description: string
	}
}

export interface ProjectArr {
	projects: Project[]
}

export interface ProjectProps {
	props: {
		projects: Project[]
	}
}

export interface CursorProps {
	n: number
	state: number[]
}

export interface SocialLinks {
	[social: string]: string
}

export interface SocialProps {
	links: SocialLinks
}
