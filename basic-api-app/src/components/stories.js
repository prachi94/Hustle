import React from 'react'

import { useGlobalContext } from '../store/AppContext'

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext()

  if (isLoading) {
    return <div ></div>
  }
  return (
    <section >
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story
        return (
          <article key={objectID} >
            <h4 >{title}</h4>
            <p>
              {points}  <span>{author} | </span> {num_comments}{' '}
              comments
            </p>
            <div>
              <a
                href={url}
              >
               Read Complete Story
              </a>
              <button
                onClick={() => removeStory(objectID)}
              >
                Remove Story
              </button>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Stories