import { MongoClient } from "mongodb";

// Replace with your MongoDB connection string
const uri = 'mongodb://localhost:27017/myDb'; // Use .env.local to store the URI

let client;

async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  return client.db("myDb"); // Updated database name to 'myDb'
}

export async function POST(req) {
    const { email } = await req.json(); // Use req.json() to parse the body

    console.log(email);
    // Validate email
    if (!email || !email.includes("@")) {
      return new Response(JSON.stringify({ message: "Invalid email address." }), { status: 400 });
    }

    try {
      const db = await connectToDatabase();
      const collection = db.collection("subscribers"); // Use 'subscribers' collection

      // Check if email already exists
      const existingSubscriber = await collection.findOne({ email });
      if (existingSubscriber) {
        return new Response(JSON.stringify({ message: "Email already subscribed." }), { status: 409 });
      }

      // Insert email into the collection
      await collection.insertOne({ email, subscribedAt: new Date() });
      return new Response(JSON.stringify({ message: "Subscribed successfully!" }), { status: 201 });
    } catch (error) {
      console.error("Database error:", error);
      return new Response(JSON.stringify({ message: "Something went wrong.", error }), { status: 500 });
    }
}

// Method not allowed
export function OPTIONS(req, res) {
  return res.setHeader("Allow", ["POST"]).status(405).end("Method Not Allowed");
}
