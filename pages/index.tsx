import {
	Cursor,
	graphql,
	Meta,
	ProjectArr,
	Projects,
	Socials,
	socials,
	useMouse
} from '~/prelude'

const Home = (props: ProjectArr) => {
	const { projects } = props
	const [cursorPosOne, cursorPosTwo] = useMouse()

	return (
		<div className="wrapper">
			<Meta />
			<h1>safin singh</h1>
			<Socials links={socials} />
			<h2>web developer &amp; cybersecurity competitor.</h2>
			<h3>i write good code. here&apos;s some of my best work.</h3>
			<Projects projects={projects} />
			<Cursor n={1} state={cursorPosOne} />
			<Cursor n={2} state={cursorPosTwo} />
			<footer>&copy; safin singh 2020</footer>
		</div>
	)
}

export const getServerSideProps = async () => graphql()

export default Home
