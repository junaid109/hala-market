import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { Provider } from "next-auth/client"

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Provider session={pageProps.session}>
      <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
    </Provider>
 
  )
}
