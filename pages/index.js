import Head from 'next/head'
import { endpoint } from '../lib'
import { useEffect, useState } from 'react'

export async function getServerSideProps() {
	return endpoint()
}

export default function Home(props) {
	const [cursorPos, setCursorPos] = useState([0, 0])
	const [cursorPosTwo, setCursorPosTwo] = useState([0, 0])

	useEffect(() => {
		const move = (e) => {
			setCursorPos([e.clientX - 3, e.clientY - 3])
			setTimeout(() => {
				setCursorPosTwo([e.clientX - 15, e.clientY - 15])
			}, 100)
		}
		window.addEventListener('mousemove', move)

		return () => {
			window.removeEventListener('mousemove', move)
		}
	}, [])

	return (
		<div className="wrapper">
			<Head>
				<title>safin</title>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
					integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=="
					crossOrigin="anonymous"
				/>
			</Head>
			<h1>SAFIN SINGH</h1>
			<a className="socials" href="https://twitter.com/safinsingh">
				TWITTER
			</a>
			<a className="socials" href="https://github.com/safinsingh/">
				GITHUB
			</a>
			<a className="socials" href="https://linkedin.com/in/safinsingh/">
				LINKEDIN
			</a>
			<h2>WEB DEVELOPER & CYBERSECURITY COMPETITOR.</h2>
			<h3>I WRITE GOOD CODE. HERE’S SOME OF MY BEST WORK.</h3>
			{props.projects
				.sort((a, b) => {
					if (a.node.name.toLowerCase() > b.node.name.toLowerCase()) return 1
					if (a.node.name.toLowerCase() < b.node.name.toLowerCase()) return -1
					return 0
				})
				.map((p) => (
					<a href={p.node.url} className="projects">
						{p.node.name}
					</a>
				))}
			<div
				className="cursorOne"
				style={{ transform: `translate3d(${cursorPos[0]}px, ${cursorPos[1]}px, 0)` }}
			/>
			<div
				className="cursorTwo"
				style={{
					transform: `translate3d(${cursorPosTwo[0]}px, ${cursorPosTwo[1]}px, 0)`,
				}}
			/>
			<footer>&copy; SAFIN SINGH 2020</footer>
		</div>
	)
}
