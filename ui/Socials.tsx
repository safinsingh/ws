import { SocialProps } from '~/types'

const Socials = ({ links }: SocialProps) => {
	return (
		<>
			{Object.keys(links).map((k: string) => (
				<a className="socials" href={links[k]}>
					{k}
				</a>
			))}
		</>
	)
}

export default Socials
