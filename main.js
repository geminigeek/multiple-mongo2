import { getDatabase } from "./get-database.js"

async function allUsers() {
  const { UserModel: User } = await getDatabase()
  await User.create({ name: "name 1", text: "text1" })
  const users = await User.find()
  console.log("users :>> ", users)
}

async function makePost() {
  const { PostModel: Post } = await getDatabase() //.PostModel
  const postToAdd = { title: "title 1", text: "some text" }
  console.log(Post)
  const post = await Post.create(postToAdd)
  let allPosts = await Post.find()
  console.log("allPosts :>> ", allPosts)
}

// console.log('getDatabase :>> ', getDatabase());
Promise.all([makePost(), allUsers()])
