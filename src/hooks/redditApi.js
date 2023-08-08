export async function getComments(id) {
  const commentsFetch = await fetch(
      `https://www.reddit.com/r/popular/comments/${id}.json`
  )
      .then((res) => res.json())
      .then((data) => data[1].data.children.map((data) => data.data))
      // to get error
      .catch((err) => console.log(err))
  return commentsFetch
}

export async function getPopular(geo_filter, after){
  console.log(`reddit internal bug cannot process geo_filters`)
  const popular = await fetch(
    `https://www.reddit.com/r/popular/.json?${geo_filter !== undefined ? `&geo_filter=${geo_filter}` : ""}${after !== undefined ? `&after=${after}` : ""}`
  )
    .then((res) => res.json())
    // to get error
    .catch((err) => console.log(err))
  return popular
}

export async function handleHeaderSearch(searchTerm, searchLimit){
  const communities = await fetch(
    `https://www.reddit.com/search.json?q=${searchTerm}&type=sr&limit=${searchLimit}`
  )
    .then((res) => res.json())
    .then((data) => data.data.children.map((data) => data.data))
    .catch((err) => console.log(err))

  const people = await fetch(
    `https://www.reddit.com/search.json?q=${searchTerm}&type=user&limit=${searchLimit}`
  )
    .then((res) => res.json())
    .then((data) => data.data.children.map((data) => data.data))
    .catch((err) => console.log(err))

  return {communities, people};
}

export function searchFetch (searchTerm, searchLimit, sortBy) {
    // fetch api of reddit
    return (
      fetch(
        `https://www.reddit.com/search.json?q=${searchTerm}&sort=relevance&limit=${searchLimit}`
      )
        .then((res) => res.json())
        .then((data) => data.data.children.map((data) => data.data))
        // to get error
        .catch((err) => console.log(err))
    );
}