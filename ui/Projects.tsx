import { Project, ProjectArr } from '~/types'

const Projects = ({ projects }: ProjectArr) => {
	const sortNodes = (nodes: Project[]) =>
		nodes.sort((a, b) => {
			if (a.node.name.toLowerCase() > b.node.name.toLowerCase()) return 1
			if (a.node.name.toLowerCase() < b.node.name.toLowerCase()) return -1
			return 0
		})

	return (
		<>
			{sortNodes(projects).map((project: Project) => (
				<a
					href={project.node.url}
					key={project.node.url}
					className="projects"
				>
					{project.node.name}
				</a>
			))}
		</>
	)
}

export default Projects
