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

### Admin Stories

- As an admin, I want to know the statistics related to all tasks so that I can optimize the models.
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
| ![Admin Dashboard](./readme/demo/admin-dashboard.png) |

### Demo GIFs

| Preprocess demo                                       |
| ----------------------------------------------------- |
| ![Preprocess](./readme/demo/preprocess.gif)           |
In the Data-Preprocess screen, the user is provided with instructions on how to use this feature (shown on the left side if the screen). In short, the user can download demo files and then upload them using the respective buttons on the right side of the screen. Then, the user can choose window sizes of interest and click on the call-to-action button, which starts the preprocessing task. A modal pops up, prompting the user to go to the dashboard where the results of the related task can be downloaded. 
| Features demo                                       |
| ![Features](./readme/demo/features.gif)           |
Similar to the preprocessing phase, the user can upload the data obtained from the preprocess action and extract features from it. The features available for the time being are: AAC, AAI, APAAC, Binary and QSO.
| Model demo                                       |
| ![Model](./readme/demo/model.gif)           |
As for the model, the user can upload the data obtained from the previous steps and choose a model to run. Finally, the user can check the results in the dashboard.
| Dashboard-Community demo                                       |
| ![Dashboard-Community](./readme/demo/dashboard-community.gif)           |
The dashboard is where all the results are available for download. Moreover, the model-related results can be shared to a community in the form of a post, showing the obtained results and the model used, and a comment that the user can write above the post.
| Dark-Light demo                                       |
| ![Dark-Light](./readme/demo/dark-light.gif)           |
A simple dark-light theme switch


<br><br>

<!-- Tech stack -->
<img src="./readme/title5.svg"/>

### LiCess is built using the following technologies:

- This project uses the [React JavaScript library](https://react.dev/). React is an open-source, JavaScript library which allows us to building user interfaces based on components.
- For backend (database), the project uses the [Laravel PHP framework](https://laravel.com/) which follows the Model-View-Controller (MVC) design-pattern and provides a clean and elegant syntax that aims to simplify the development process.
- The app uses the font ["Roboto"](https://fonts.google.com/specimen/Roboto) as its main font.

<br><br>

<!-- Performance -->
<img src="./readme/title7.svg"/>

| API Test Results                                       |
| ----------------------------------------------------- |
| Data Preprocess                                       |
| ![Preprocess](./readme/demo/api-preprocess.png)           |
| Feature Extraction                                        |
| ![Features](./readme/demo/api-feature.png)           |
| Model Run                                        |
| ![Model](./readme/demo/api-model.png)           |

The time taken for each task of the key features: Data Preprocessing, Feature Extraction and Model Run provides promising results, varying between 45 seconds and around a minute. This, in fact, provides a great user experience.
<br>
🚨
- The source codes for data preprocessing, feature extraction and models are available on demand (which are external APIs called by Laravel).
<br>
- All the related postman collections can be found in the "postman" folder in the root directory.
<br><br>

<!-- How to run -->
<img src="./readme/title6.svg"/>

> To set up LiCess locally, follow these steps:

### Prerequisites

- Node.js:
  [https://nodejs.org/en/download](https://nodejs.org/en/download)
- XAMPP:
  [https://www.apachefriends.org/download.html](https://www.apachefriends.org/download.html)
- Composer:
  [https://getcomposer.org/download/](https://getcomposer.org/download/)
- Postman:
  [https://www.postman.com/downloads/](https://www.postman.com/downloads/)

### Installation

Frontend-related steps:
1. Clone the repo
   ```sh
   git clone https://github.com/Mohamad-Rida-Chouman/LiCess-website.git
   ```
2. From the root folder, navigate to the client folder:
   ```sh
   cd client
   ```
3. Install the required dependencies:
   ```sh
   npm install
   ```
4. Run React's start-up command:
   ```sh
   npm run start
   ```

Database-related steps:
1. Launch XAMPP and start both Apache and MySQL services
2. Go to phpmyadmin:
   localhost/phpmyadmin/
3. Create a database with the name "licess".

Backend-related steps:
1. Navigate to the server folder:
   ```sh
   cd ../server
   ```
2. Install the required dependencies:
   ```sh
   composer install
   ```
3. Run Laravel's start up command:
   ```sh
   php artisan serve
   ```
4. Launch Postman and import the collections to the workspace.

Now, you should be able to run LiCess locally and explore its features.
