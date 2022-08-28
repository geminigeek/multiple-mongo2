import { createConnections } from "./create-connection.js"
import { UserSchema } from "./users-schema.js"
import { PostSchema } from "./posts-schema.js"

let db

export function getDatabase() {
  if (db) return Promise.resolve(db)
  return createDatabases()
}

async function createDatabases() {
  const { db1, db2 } = await createConnections(
    "mongodb://localhost/db1",
    "mongodb://localhost/db2"
  )
  const UserModel = db1.model("users", UserSchema)
  const PostModel = db2.model("posts", PostSchema)
  db = {
    UserModel,
    PostModel,
    // also if you need this
    connections: {
      db1,
      db2,
    },
  }
  return db
}
