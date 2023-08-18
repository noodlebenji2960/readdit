import { getCookie } from "./getCookie";

export const REDIRECT_URI = "https://noodlebenji2960.github.io/readdit/";
export const RANDOM_STRING_LENGTH = 12
export const RANDOM_STRING = randomString(RANDOM_STRING_LENGTH)
export const CLIENT_ID = "OShehnQ0vsu-nSigWsrsGA";
export const CLIENT_SECRET = "oQvTq3FQ3GM9jzNFHS6iX0uH64usQQ";
export const authorizationURL = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=${RANDOM_STRING}&redirect_uri=${REDIRECT_URI}&duration=permanent&scope=identity+submit+edit+mysubreddits+history+read`;

export function randomString(length) {
  let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let charLength = chars.length;
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
}

export function setRandomStringCookie(){
  return document.cookie =`randomString=${RANDOM_STRING}`
}

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

export async function getCommentsAsAuth(id) {
  let authTokenCookie = getCookie("token")
  const commentsFetch = await fetch(
    `https://oauth.reddit.com/comments/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authTokenCookie}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => data[1].data.children.map((data) => data.data))
    // to get error
    .catch((err) => console.log(err))
  return commentsFetch
}

export async function getPopular(geo_filter, after) {
  console.log(`reddit internal bug cannot process geo_filters`)
  const popular = await fetch(
    `https://www.reddit.com/r/popular/.json?${geo_filter !== undefined ? `&geo_filter=${geo_filter}` : ""}${after !== undefined ? `&after=${after}` : ""}`
  )
    .then((res) => res.json())
    // to get error
    .catch((err) => console.log(err))
  return popular
}

export async function getPopularAsAuth(geo_filter, after) {
  let authTokenCookie = getCookie("token")
  console.log(`reddit internal bug cannot process geo_filters`)
  const popular = await fetch(
    `https://oauth.reddit.com//r/popular/.json?${geo_filter !== undefined ? `&geo_filter=${geo_filter}` : ""}${after !== undefined ? `&after=${after}` : ""}`
  , {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authTokenCookie}`,
      "Content-Type": "application/x-www-form-urlencoded",
    }
  })
    .then((res) => res.json())
    // to get error
    .catch((err) => console.log(err))
  return popular
}

export async function handleHeaderSearch(searchTerm, searchLimit) {
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

  return { communities, people };
}

export function searchFetch(searchTerm, searchLimit) {
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

export const getToken = async (code) => {
  const body = `grant_type=authorization_code&code=${code}&redirect_uri=${REDIRECT_URI}`;
  const authHeader = `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`;

  const response = await fetch(`https://www.reddit.com/api/v1/access_token`, {
    method: "POST",
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body,
  });

  const data = await response.json();
  return data;
};

export const getUser = async (access_token) => {
  const response = await fetch("https://oauth.reddit.com/api/v1/me", {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
};

export const comment = async (text, commentID) => {
  const authTokenCookie = getCookie("token");
  const body = `api_type=json&text=${encodeURIComponent(text)}&thing_id=${commentID}`;

  try {
    const response = await fetch("https://oauth.reddit.com/api/comment", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authTokenCookie}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    });

    return await response.json();
  } catch (error) {
    console.error("Error posting comment:", error);
  }
};

export const getSubs = async () => {
  const authTokenCookie = getCookie("token");

  try {
    const response = await fetch(`https://oauth.reddit.com/subreddits/mine/subscriber`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authTokenCookie}`,
      },
    });

    const subredditResponse = await response.json();
    return subredditResponse
  } catch (error) {
    console.error(`Error getting subreddits:`, error);
  }
};