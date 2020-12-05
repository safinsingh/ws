import {
	Cursor,
	// Constants
	graphql,
	// Components
	Meta,
	ProjectArr,
	Projects,
	Socials,
	socials,
	// Hooks
	useMouse
} from '~/prelude'

const Home = (props: ProjectArr) => {
	const { projects } = props
	const [cursorPosOne, cursorPosTwo] = useMouse()

	return (
		<div className="wrapper">
			<Meta />
			<h1>SAFIN SINGH</h1>
			<Socials links={socials} />
			<h2>WEB DEVELOPER &amp; CYBERSECURITY COMPETITOR.</h2>
			<h3>I WRITE GOOD CODE. HERE’S SOME OF MY BEST WORK.</h3>
			<Projects projects={projects} />
			<Cursor n={1} state={cursorPosOne} />
			<Cursor n={2} state={cursorPosTwo} />
			<footer>&copy; SAFIN SINGH 2020</footer>
		</div>
	)
}

export const getServerSideProps = async () => {
	return graphql()
}

export default Home
