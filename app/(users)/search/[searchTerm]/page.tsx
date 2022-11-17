import React from 'react'

type PageProps = {
  params: {
    searchTerm: string
  }
}

type SearchResult = {
  organic_results: [
    {
      positon: number
      title: string
      link: string
      thumbnail: string
      snippet: string
    },
  ]
}

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`,
  )
  //   throw new Error('WHOOPS something broken')
  const data: SearchResult = await res.json()
  return data
}
async function SearchResults({ params: { searchTerm } }: PageProps) {
  const searchResults = await search(searchTerm)
  return (
    <div>
      <p className="text-gray-500 text-sm">
        You search for: <>{searchTerm}</>
      </p>
      <ol className="space-x-5 p-5">
        {searchResults.organic_results.map(result => (
          <li key={result.positon} className="list-decimal">
            <p className="font-bold">{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default SearchResults
