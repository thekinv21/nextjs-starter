'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren, useState } from 'react'
import { Toaster } from 'sonner'

export function Providers({ children }: PropsWithChildren) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false
				}
			}
		})
	)

	return (
		<QueryClientProvider client={client}>
			<Toaster theme='light' position='top-center' duration={1500} />
			{children}
		</QueryClientProvider>
	)
}
