import { useEffect, useState } from 'react'

const smallCursorOffset = 3
const largeCursorOffset = 15
const largeCursorFollowRate = 70

const useMouse = () => {
	const [cursorPosOne, setCursorPosOne] = useState([0, 0])
	const [cursorPosTwo, setCursorPosTwo] = useState([0, 0])

	useEffect(() => {
		// So as not to include @types/node in dependencies
		// rather than devDependencies
		let laggedTimeout: any

		// FIXME
		const move = (e: any) => {
			setCursorPosOne([
				e.clientX - smallCursorOffset,
				e.clientY - smallCursorOffset
			])
			laggedTimeout = setTimeout(() => {
				setCursorPosTwo([
					e.clientX - largeCursorOffset,
					e.clientY - largeCursorOffset
				])
			}, largeCursorFollowRate)
		}

		window.addEventListener('mousemove', move)
		return () => {
			window.removeEventListener('mousemove', move)
			clearTimeout(laggedTimeout)
		}
	}, [])

	return [cursorPosOne, cursorPosTwo]
}

export default useMouse
