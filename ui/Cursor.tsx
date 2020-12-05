import { CursorProps } from '~/types'

const Cursor = ({ n, state }: CursorProps) => {
	const cursorClassArr = ['One', 'Two']

	return (
		<div
			className={`cursor${cursorClassArr[n - 1]}`}
			style={{
				transform: `translate3d(${state[0]}px, ${state[1]}px, 0)`
			}}
		/>
	)
}

export default Cursor
