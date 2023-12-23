# Netflix Clone Application

Welcome to the Netflix Clone application! This web application is built using React.js for the frontend, Node.js and Express for the backend, and MongoDB for database storage. The application fetches movie data from The Movie Database (TMDb) API and utilizes CRUD operations for user authentication.

## Features

### User Authentication

- **Login and Sign Up:** Users can log in to their accounts or sign up for a new account.
- **Authentication Middleware:** Secure your routes using authentication middleware to ensure that only authenticated users can access certain features.

### Home Page

- **Discover New Movies and TV Shows:** Explore the latest and popular movies and TV shows fetched from the TMDb API.
- **Different Lists:** Categorized lists such as "Now Playing," "Popular," "Top Rated," and "Upcoming" allow users to discover a variety of content.

### Movie and TV Series Pages

- **Detailed Movie Information:** View detailed information about a specific movie, including its synopsis, release date, and more.
- **Genre Filtering:** Filter movies and TV series by genre to find content that matches your preferences.

### My List Page

- **Favorites:** Mark your favorite movies and TV shows to easily access them later.
- **Continue Watching:** Resume watching from where you left off for the shows and movies you are currently watching.
- **Recommendations:** Get personalized recommendations based on your viewing history.
- **Past Movies:** View a list of movies you've watched in the past.

### Preview the application

## Sign In Page

<img width="1279" alt="Screenshot 2023-12-23 at 1 41 18 AM" src="https://github.com/atharvakonge/Netflix/assets/73238261/a5ccd928-7143-4f33-9509-18210e38cd60">

## Log In Page

<img width="1280" alt="Screenshot 2023-12-23 at 1 41 06 AM" src="https://github.com/atharvakonge/Netflix/assets/73238261/d58dfafa-d322-4b59-a2c1-0891f0bfb0d6">

## Home Page

<img width="1278" alt="Screenshot 2023-12-23 at 1 40 00 AM" src="https://github.com/atharvakonge/Netflix/assets/73238261/8a044879-89d8-4a06-9de1-d4f68ad48409">

## Movie Lists

<img width="1280" alt="Screenshot 2023-12-23 at 1 40 31 AM" src="https://github.com/atharvakonge/Netflix/assets/73238261/b7f2ad89-56e3-49d6-bb4d-812c0e603731">





## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies for the frontend and backend:**

   ```bash
    cd client
    npm install

    cd ../server
    npm install
   ```

3. **Set up your MongoDB database:**

   Create a .env file in the server directory.

   Add your MongoDB connection string:

   ```bash
    MONGODB_URI=your-mongodb-connection-string
   ```

4. **Run the application:**

   Create a .env file in the server directory.

   Add your MongoDB connection string:

   ```bash
    // Run the backend
    npm start

    // Run the front end
    npm start
   ```

5. **Open Application in Browser:**

   Open your browser and navigate to http://localhost:3000 to use the Netflix Clone application.
