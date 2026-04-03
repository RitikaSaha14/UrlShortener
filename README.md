# URL Shortener – Backend System

# Overview
This project is a scalable URL Shortener Backend System designed to demonstrate strong fundamentals in Data Structures, Backend Development, and System Design—key areas evaluated in Infosys SP/DSE roles.
It converts long URLs into short, unique links and efficiently redirects users while maintaining performance and reliability.

# Tech Stack
Node.js – Backend runtime
Express.js – API framework
MongoDB – NoSQL database for URL storage
Mongoose – ODM for schema modeling
NanoID / ShortID – Unique short code generation

# Core Features
🔗 Generate short URLs from long links

⚡ Fast redirection using optimized lookup

🧠 Unique ID generation (collision-free logic)

📦 RESTful API architecture

🗄️ Persistent storage with MongoDB

🧠 Concepts Demonstrated (Important for Infosys SP/DSE)

1. Hashing & Unique ID Generation

*Used short codes (Base62/NanoID approach)
*Ensures uniqueness and avoids collisions

2. Database Design

# Key-value mapping:

shortCode → originalURL
Efficient retrieval using indexing
3. Time Complexity Optimization
URL lookup optimized to O(1) using indexing
Suitable for high read traffic systems
4. Backend Architecture
Clean separation of:
Routes
Controllers
Models

5. System Design Thinking
Designed similar to real-world systems like
Bitly
TinyURL
📡 API Endpoints

➤ Create Short URL
POST /shorten

Request Body:

{
  
  "originalUrl": "https://example.com"

}

➤ Redirect to Original URL

GET /:shortCode

▶️ How to Run Locally
# Clone repo
git clone https://github.com/RitikaSaha14/Urlshortener.git

# Go to project folder
cd url-shortener

# Install dependencies
npm install

# Start server
node server.js

🌱 Future Enhancements (Good Talking Points in Interview)
📊 Click analytics (track visits)
⏳ Expiry-based URLs
🔐 Authentication & user dashboard
🌐 Custom branded URLs
💡 Why This Project Matters (Interview Angle)

This project highlights:

Strong problem-solving ability
Understanding of real-world scalable systems
Hands-on experience with backend technologies
Ability to translate theory → working product
🧾 Conclusion

A practical implementation of a high-frequency systeOverview

This project is a scalable URL Shortener Backend System designed to demonstrate strong fundamentals in Data Structures, Backend Development, and System Design—key areas evaluated in Infosys SP/DSE roles.

It converts long URLs into short, unique links and efficiently redirects users while maintaining performance and reliability.

⚙️ Tech Stack
Node.js – Backend runtime
Express.js – API framework
MongoDB – NoSQL database for URL storage
Mongoose – ODM for schema modeling
NanoID / ShortID – Unique short code generation
🔑 Core Features
🔗 Generate short URLs from long links
⚡ Fast redirection using optimized lookup
🧠 Unique ID generation (collision-free logic)
📦 RESTful API architecture
🗄️ Persistent storage with MongoDB
🧠 Concepts Demonstrated (Important for Infosys SP/DSE)
1. Hashing & Unique ID Generation
Used short codes (Base62/NanoID approach)
Ensures uniqueness and avoids collisions
2. Database Design

Key-value mapping:

shortCode → originalURL
Efficient retrieval using indexing
3. Time Complexity Optimization
URL lookup optimized to O(1) using indexing
Suitable for high read traffic systems
4. Backend Architecture
Clean separation of:
Routes
Controllers
Models
5. System Design Thinking
Designed similar to real-world systems like
Bitly
TinyURL
📡 API Endpoints
➤ Create Short URL
POST /shorten

Request Body:

{
  "originalUrl": "https://example.com"
}
➤ Redirect to Original URL
GET /:shortCode
▶️ How to Run Locally
# Clone repo
git clone https://github.com/yourusername/url-shortener.git

# Go to project folder
cd url-shortener

# Install dependencies
npm install

# Start server
node server.js

#Future Enhancements (Good Talking Points in Interview)
📊 Click analytics (track visits)
⏳ Expiry-based URLs
🔐 Authentication & user dashboard
🌐 Custom branded URLs
💡 Why This Project Matters (Interview Angle)

# This project highlights:
Strong problem-solving ability
Understanding of real-world scalable systems
Hands-on experience with backend technologies
Ability to translate theory → working product

🧾 Conclusion
A practical implementation of a high-frequency system that reflects the kind of backend engineering and system design.
