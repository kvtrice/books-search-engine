![Hero image](/src/assets/Hero.jpg)

# Google Books Search

This project's goal was to consume the Google Books API, and provide an intuitive user interface for users to search for books.

## Table of Contents

-   [View the live site](https://google-book-search-theta.vercel.app/)
-   [Key Features](#key-features)
-   [Tech Stack](#tech-stack)

## Key Features

### Book Search

Users are able to search for a book by it's title, author or publisher. The most relevant matches will be retuurned for the user to browse.

### Pagination & Results Per Page

When searching, the user is able to set the number of results they wish to view per page (with the default being 10). If there are multiple pages of results returnes the user can navigate between results pages using the Next and Previous buttons located at both the top and bottom of the screen.

### Modals

The user is able to click either the book image or 'See more' button to pop open a modal that displays more details about that specific book.

### Mobile Responsiveness

The site is designed to be responsive across all screen sizes, including tablet and mobile.

### User Friendly Error Handling

If an error occurs, the user will be provided with a clear message notifying them of the issue and how to rectify it. This happens in all the following cases:

-   If the search term entered is invalid (such as an empty string)
-   If there are no results found for the search term
-   If there's an issue fetching the books (e.g: API is down)

## Tech Stack

-   Vite + React
    -   This app is build in React using Vite
-   Google Books API
    -   Used to fetch the book information
-   React-Loading-Icons Library
    -   Used as a visual cue to the user when things are loading
