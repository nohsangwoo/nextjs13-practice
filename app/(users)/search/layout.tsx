import { ReactNode } from 'react'
import Search from './Search'

interface Props {
  children: ReactNode
}
export default function RootLayout({ children }: Props) {
  return (
    <main className="flex space-x-4 divide-x-2 p-5">
      <div>
        <h1>Search</h1>
      </div>
      <div className="flex-1 pl-5">
        <Search />
        <div>{children}</div>
      </div>
    </main>
  )
}
