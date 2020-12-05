import { SocialProps } from '~/types'

const Socials = ({ links }: SocialProps) => (
	<>
		{Object.keys(links).map((k: string) => (
			<a className="socials" key={k} href={links[k]}>
				{k}
			</a>
		))}
	</>
)

export default Socials
