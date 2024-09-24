# E-Commerce Website Frontend

This project is a fully responsive e-commerce website frontend built using React, Tailwind CSS, Redux Toolkit, and Firebase. It includes essential features such as product browsing, user authentication, adding items to the cart, saving favorites, and search functionality. The app interacts with Firebase for user authentication, ensuring a smooth login and registration process.

## Features
## 1. User Authentication (Firebase)
- Secure user login, registration, and logout functionality using Firebase Authentication.
- Redirects unauthenticated users to the login page when trying to access protected routes (e.g., adding items to the cart).
## 2. Add to Cart
- Users can add products to their cart, and the total number of items is dynamically displayed in the navbar.
- The cart updates are managed using Redux Toolkit for efficient state management.
## 3. Favorites
- Allows users to add items to their favorites list for easy access.
- Favorite items are managed using a dedicated slice in Redux Toolkit.
## 4. Search Functionality
- Real-time search feature to help users quickly find products by name.
- Filtered product suggestions appear dynamically as users type in the search bar.
## 5. Fully Responsive Design
- Styled using Tailwind CSS, the site is fully responsive and optimized for all screen sizes, providing a seamless experience across devices.

# Technologies Used
- **React**: Frontend library for building interactive UIs.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **Redux Toolkit**: For efficient state management of cart, favorites, and user authentication.
- **Firebase**: Used for authentication to securely log in and register users.
- **React Router**: For navigation between different pages.
- **Toastify**: For displaying notifications like successful actions or error alerts.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/vipulgupta8/Etsyy-clone.git
    cd Etsyy-clone
    ```
2. **Install dependencies**:

    ```bash
    npm install
    ```
4. **Run the development server**:

    ```bash
    npm run dev
    ```
