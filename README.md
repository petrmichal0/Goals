# Goals

## Project Title and Description
Goals is a web application designed to help users set, track, and achieve their goals. Users can create new goals, view a list of their current goals, and mark goals as completed.

## Badges
![Static Badge](https://img.shields.io/badge/status-online-brightgreen)

## Quick Look
<img src="https://github.com/user-attachments/assets/478544d2-9be4-4121-af72-09f896c1cb7f" width="700" alt="Goals App Demo">

## Table of Content
- [Project Title and Description](#project-title-and-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Demo (link)](#demo-link)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Third-Party Libraries](#third-party-libraries)
- [License](#license)

## Features
- Create and manage goals
- View a list of current goals
- Mark goals as completed
- User-friendly interface

## Installation

### Prerequisites
- Node.js (v12 or higher)
- npm (v6 or higher)

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/petrmichal0/Goals.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Goals
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
To start the application, run the following command:
```bash
npm run dev
```

After starting, go to [http://localhost:3000](http://localhost:3000) in your web browser.

## Screenshots

<table>
  <tr>
    <th>Homepage</th>
    <th>Goal Management</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <img src="https://github.com/user-attachments/assets/2af0a439-f8aa-4890-bf83-0407d1a0d018" width="300" height="300" alt="Homepage">
    </td>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <img src="https://github.com/user-attachments/assets/745a3558-32dd-400a-8c65-b5e7c01a12f4" width="300" height="300" alt="Goal Management">
    </td>
  </tr>
</table>

## Demo (link)

Check out the live demo of the application [here](https://thegoals.netlify.app/).

## Project Structure

```css
Goals/
├── public/
│   ├── goals.jpg
│   ├── index.html
├── src/
│   ├── assets/
│   │   ├── goals.jpg
│   ├── components/
│   │   ├── CourseGoal.tsx
│   │   ├── CourseGoalList.tsx
│   │   ├── Header.tsx
│   │   ├── InfoBox.tsx
│   │   ├── NewGoal.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Technologies Used

[![React Badge](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)](#)
[![TypeScript Badge](https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&labelColor=black&logo=typescript&logoColor=007ACC)](#)
[![Vite Badge](https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&labelColor=black&logo=vite&logoColor=646CFF)](#)

## Third-Party Libraries

* React Router

## License

This project is licensed under the MIT License - see the LICENSE file for details.

