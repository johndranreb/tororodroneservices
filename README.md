# Tororo Drone Services

## Description

Tororo Drone Services is a website that offers professional drone services for various purposes, including aerial photography, surveillance, delivery, and inspections. This repository contains the codebase and configuration for the website, which is built as a headless website using WordPress as the backend and Next.js with Tailwind CSS for the frontend.

The website provides an intuitive and user-friendly interface for users to inquire about drone services, view service details, and contact Tororo Drone Services for their specific needs.

This project is a headless website that leverages Next.js, Tailwind CSS, and WordPress as its backend. Below, you'll find information about the project, its technologies, and how to set it up.

## Technologies Used

- **Next.js:** Next.js is used for building the frontend of the website. It enables server-side rendering (SSR) for improved performance and SEO.

- **Tailwind CSS:** Tailwind CSS is used for styling and UI components. It allows for easy customization and maintainability of the website's design.

- **WordPress:** WordPress serves as the backend for the website. It is used to manage content, such as service details, blog posts, and other dynamic data.

## Features

- User-friendly interface for browsing drone services.
- Contact form for users to inquire about services.
- Blog section for sharing updates and information about drone technology and services.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## To set up the project locally and start working on it, follow these steps:

1. Clone the Repository:

`git clone https://github.com/your-username/tororo-drone-services.git`

2. Install Dependencies:

Navigate to the project directory and install the required dependencies for both the frontend and the WordPress backend:

`cd tororo-drone-services`
`npm install`
`cd wordpress`
`composer install`

3. WordPress Configuration:

Create a MySQL database for WordPress and configure it in the wordpress/wp-config.php file.

Install WordPress by running the setup wizard in your web browser.

Configure the required plugins and settings.

4. Start the Development Server:

In the project root directory, start the development server:

`npm run dev`

5. Access the Website:

Open your web browser and access the website at http://localhost:3000.
