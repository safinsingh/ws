import '~/css'

import { AppProps } from 'next/app'
import React from 'react'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
	<Component {...pageProps} />
)

export default App
