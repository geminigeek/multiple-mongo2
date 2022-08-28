import mongoose from "mongoose"

// You create connections by calling this function and giving it the URL to the server
export async function createConnections(url1, url2) {
  const db1 = await mongoose.createConnection (url1)
  const db2 = await mongoose.createConnection(url2)
  return {
    db1,
    db2,
  }
}
