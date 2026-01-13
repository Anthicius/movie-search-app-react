# React Movie Search App

A dynamic movie discovery application built with React that interfaces with the Open Movie Database (OMDB) API. This project demonstrates asynchronous data fetching, local storage persistence, and advanced CSS Grid/Flexbox layouts.

## Features

* **Real-time Search:** Connects to the [OMDB API](https://www.omdbapi.com/) to fetch live movie data including posters, plots, ratings, and release years.
* **Favorites System:** Users can save their favorite movies to a personal collection and remove them at any time.
* **Persistent Data:** Favorites are saved to the browser's Local Storage, ensuring the list remains intact after a page refresh.
* **Responsive Layout:** Features a hybrid layout system where the "Featured" search result uses a detailed horizontal view, while the "Favorites" list adapts to a compact, responsive grid.
* **Robust Error Handling:** Gracefully handles "Movie not found" errors, loading states, and missing assets (like posters or ratings) without crashing.

## Tech Stack & Concepts

* **React:** Functional Components and Hooks (`useState`, `useEffect`).
* **API Integration:** Asynchronous `fetch` requests to handle external data from OMDB.
* **State Management:** Managed complex state for search inputs, API responses, loading indicators, and the favorites list.
* **Side Effects:** `useEffect` used for triggering API calls and syncing the favorites list with Local Storage.
* **CSS:** Advanced styling using CSS Grid for the gallery, Flexbox for card alignment, and responsive media queries for mobile devices. Was created alongside AI help for visual styling mainly.

<img width="1920" height="1728" alt="image" src="https://github.com/user-attachments/assets/4ed28dc4-b97c-409f-8310-b4ae74bdc461" />
<br>
<br>
<img width="1920" height="878" alt="image" src="https://github.com/user-attachments/assets/7cd155e0-454b-4bc0-9258-c174443137e0" />
<br>
<br>
<img width="1920" height="935" alt="image" src="https://github.com/user-attachments/assets/1e1ee941-f4b5-472a-aa49-70b75e4a7435" />
