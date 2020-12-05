import { useEffect, useState } from 'react'

import {
	cursorInitPos,
	largeCursorFollowRate,
	largeCursorOffset,
	smallCursorOffset
} from '~/constants'

const useMouse = () => {
	const [cursorPosOne, setCursorPosOne] = useState([
		cursorInitPos - smallCursorOffset,
		cursorInitPos - smallCursorOffset
	])
	const [cursorPosTwo, setCursorPosTwo] = useState([
		cursorInitPos - largeCursorOffset,
		cursorInitPos - largeCursorOffset
	])

	useEffect(() => {
		// So as not to include @types/node in dependencies
		// rather than devDependencies
		let laggedTimeout: any

		const move = (e: MouseEvent) => {
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
