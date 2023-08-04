const postItemData = {
    author: "slimBradey6",
    ups: 689932,
    subreddit_name_prefixed: "r/cafeCorner123",
    created: 1174652632,
    title: "big boy eaten by blimp",
    num_comments: 9654,
}

export const dummyComments = []

for (let i = 0; i < 8; i++) {
  let date = randomDate()
  const dummyComment = (
    {
      id: crypto.randomUUID(),
      body: "this is comment",
      comments: [],
      created: date
    }
  )
  for (let ind = 0; ind < 15; ind++) {
    if (ind % 2 == 0) {
      let date = randomDate()
      dummyComment.comments.push(
        {
          id: crypto.randomUUID(),
          body: "this is sub comment",
          comments: [],
          created: date
        }
      )
    }
  }
  dummyComments.push(dummyComment)

  function randomDate() {
    const start = new Date('2023-07-29');
    const end = new Date('2023-7-31');
    const startHour = 0
    const endHour = 23
    var date = new Date(+start + Math.random() * (end - start));
    var hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    date = Math.floor(date)
    return date;
  }

}
