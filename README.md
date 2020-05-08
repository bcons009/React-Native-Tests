# React-Native-Tests
React Native test projects that I worked on between January 2020 and March 2020. Specifically, "map-proto-2" was intended to be a Google Maps clone written in React Native for a Software Engineering project. However, due to COVID-19 complications that part of the project was cancelled by my professor.

Each folder in the root directory contains files for different React Native projects. To view these projects, create a new React Native application using Expo and paste/overwrite these files into the root directory of the newly created project. (I would have liked to simplify things and upload the projects in their entirety, but unfortunately Github will not let me do that.)

## `map-proto-2`
An app with functioning login and sign up pages to access accounts created and stored in Google Firebase. Upon successful login, a new page would welcome the user and display their username. Firebase error handling was also implented into an in-app error message field. Unfortunately, I have since lost access to my Firebase database due to the expiration of the free trial I was using for this project. However, as long as the fields in the object `firebaseConfig` (found in `constants/Firebase.js`) are configured to a functioning Firebase database then the app will work fine.

## `rn-testing`
A simple guessing game application I created to familiarize myself with the React Native development environment. Based on the following video tutorial: https://www.youtube.com/watch?v=qSRrxpdMpVc
