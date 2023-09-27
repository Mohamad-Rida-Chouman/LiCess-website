<img src="./readme/title1.svg"/>

<br><br>

<!-- project philosophy -->
<img src="./readme/title2.svg"/>

> An AI-Powered, Bioinformatics tool for predicting S-Nitrosylation (SNO) sites in proteins, helping in processes including - but not limited to - drug design, protein understanding...
>
> LiCess aims to provide a user-friendly experience for researchers interested in SNO-related studies and researches. It predicts the site of SNO in proteins using real-life data.

### User Stories

- As a user, I want to share my results on the website so that others can benefit from and compare my results.
- As a user, I want to upload my data to the server so that the model tests it.
- As a user, I want to download my results so that I can have them offline.
- As a user, I want to upload my data to the server so that the model tests it.
- As a user, I want to register to an account so that I can save my runs.
- As a user, I want to login to an account so that I can check my runs’ history.
  <br><br>

<!-- Prototyping -->
<img src="./readme/title3.svg"/>

> We designed LiCess using wireframes and mockups, iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

### Wireframes

| Landing screen                            | Features screen                       |
| --------------------------------------- | ------------------------------------- |
| ![Landing](./readme/demo/landing-wireframe.png) | ![Features](./readme/demo/features-wireframe.png) |

### Mockups

| Landing screen                             | Features Screen                           |
| --------------------------------------- | ------------------------------------- |
| ![Landing](./readme/demo/landing-mockup.png) | ![fsdaf](./readme/demo/features-mockup.png) |

<br><br>

<!-- Implementation -->
<img src="./readme/title4.svg"/>

> Using the wireframes and mockups as a guide, we implemented the LiCess Project with the following features:

### User Screens

| Login screen                                          | Register screen                                             | Landing screen (hero)                                   |
| ----------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------- |
| ![Login](./readme/demo/login-screen-final.png)        | ![Register](./readme/demo/register-screen-final.png)        | ![Landing (Hero)](./readme/demo/landing-hero-final.png) |
| Data Preprocessing Screen                             | Feature Extraction Screen                                   | Model Run Screen                                        |
| ![Data Preprocess](./readme/demo/preprocessing.png)   | ![Feature Extraction](./readme/demo/features.png)           | ![Model Run](./readme/demo/models.png)                  |
| Dashboard Screen                                      | Community Screen                                            | Landing screen (key features)                           |
| ![Dashboard](./readme/demo/dashboard.png)             | ![Community](./readme/demo/community.png)                   | ![Landing (Key Features)](./readme/demo/landing-key-features-final.png) |

### Admin Screens

| Admin Dashboard screen                                |
| ----------------------------------------------------- |
| ![Admin Dashboard](./readme/demo/admin=dashboard.png) |

<br><br>

<!-- Tech stack -->
<img src="./readme/title5.svg"/>

### LiCess is built using the following technologies:

- This project uses the [React JavaScript library](https://react.dev/). React is an open-source, JavaScript library which allows us to building user interfaces based on components.
- For backend (database), the project uses the [Laravel PHP framework](https://laravel.com/) which follows the Model-View-Controller (MVC) design-pattern and provides a clean and elegant syntax that aims to simplify the development process.
- The app uses the font ["Roboto"](https://fonts.google.com/specimen/Roboto) as its main font.

<br><br>

<!-- How to run -->
<img src="./readme/title6.svg"/>

> To set up LiCess locally, follow these steps:

### Prerequisites
https://getcomposer.org/download/
- Node.js:
  [https://nodejs.org/en/download](https://nodejs.org/en/download)
- XAMPP:
  [https://www.apachefriends.org/download.html](https://www.apachefriends.org/download.html)
- Composer:
  [https://getcomposer.org/download/](https://getcomposer.org/download/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Mohamad-Rida-Chouman/LiCess-website.git
   ```
2. From the root folder, navigate to the client folder:
   ```sh
   cd client
   ```
3. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

Now, you should be able to run LiCess locally and explore its features.
