// lines 2-17 provided by freeCodeCamp, all other code written by me
const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Back-End Development', className: 'backend' }
};

function timeAgo(t) {
  const now = new Date();
  const then = new Date(t);
  const timeDiff = now - then;
  const minutesDiff = Math.floor(timeDiff / (1000 * 60))
  if (minutesDiff < 60) {
    return `${minutesDiff}m ago`
  }
  const hoursDiff = Math.floor(timeDiff / (1000 * 3600))
  if (hoursDiff < 24) {
    return `${hoursDiff}h ago`
  }
  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24))
  return `${daysDiff}d ago`
}

function viewCount (nPosts) {
  if (nPosts >= 1000) {
    return `${Math.floor(nPosts / 1000)}k`
  } else {
    return nPosts;
  }
}

function forumCategory (catID) {
  if (allCategories[catID]) {
    return `<a class="category ${allCategories[catID].className}" href="${forumCategoryUrl}${allCategories[catID].className}/${catID}">${allCategories[catID].category}</a>`
  } else {
    return `<a class="category general" href="${forumCategoryUrl}general/${catID}">General</a>`
  }
}

function avatars (posters, users) {
  let results = ``
  posters.forEach(poster => {
    const userID = poster.user_id
    const match = users.find(user => 
      user.id === poster.user_id
    )
    let imgURL = match.avatar_template.replace("{size}","30")
    if (imgURL[0] === "/") {
      imgURL = avatarUrl + imgURL
      }
    results += `<img src="${imgURL}" alt="${match.name}">`
  })
  return results
}

function showLatestPosts (posts) {
  const users = posts.users
  const topics = posts.topic_list.topics
  const postsContainer = document.getElementById("posts-container")
  topics.forEach(topic => {
    postsContainer.innerHTML += `<tr>
    <td><a class="post-title" href="${forumTopicUrl}${topic.slug}/${topic.id}">${topic.title}</a>${forumCategory(topic.category_id)}</td>
    <td>
      <div class="avatar-container">${avatars(topic.posters, users)}</div>
    </td>
    <td>${topic.posts_count - 1}</td>
    <td>${viewCount(topic.views)}</td>
    <td>${timeAgo(topic.bumped_at)}</td>`
  })
}

avatars([
          { "user_id": 6 },
          { "user_id": 576147 }
        ], [
    {
      "id": 6,
      "username": "QuincyLarson",
      "name": "Quincy Larson",
      "avatar_template": "/user_avatar/QuincyLarson_{size}.png"
    },
    {
      "id": 576147,
      "username": "JOY-OKORO",
      "name": "Joy Okoro",
      "avatar_template": "/user_avatar/JOY-OKORO_{size}.png"
    }
  ])

async function fetchData () {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json()
    showLatestPosts(data)
  }
  catch (err) {
    console.log(err)
  }
}

fetchData ()