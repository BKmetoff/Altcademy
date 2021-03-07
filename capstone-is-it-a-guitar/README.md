# Is it a guitar??

A [Rails](https://rubyonrails.org/)/[Webpacker](https://github.com/rails/webpacker/tree/a84a4bb6b385ae17dd775a6034a0b159b88c6ea9)/[ReactJS](https://reactjs.org/) app that recognizes whether or not there's a guitar in an uploaded image.

This is the capstone project of [Altcademy](https://www.altcademy.com/)'s [FullStack WebDev](https://www.altcademy.com/programs/fswd) course.

A live version of the app is deployed on [Heroku](https://isitaguitar.herokuapp.com/).

The app is not meant to be used on mobile devises.

## Main features:

The app:

- uses user authentication from Rails;
- uses [TensorFlow.js](https://www.npmjs.com/package/@tensorflow/tfjs) and the [MobileNet](https://www.npmjs.com/package/@tensorflow-models/mobilenet) model do the image recognition;
- stores uploaded images to [Cloudinary](https://cloudinary.com/);
- stores Cloudinary image URLs to the Rails ActiveRecord DB;
- offers a history each user's own attempts with stats - total # of attempts & average success rate;
- offers a Leaderboard sorting all users based on their success rate (# of success attempts/total number # of attempts)
- uses [styled-components](https://styled-components.com/) because it's just better this way;

## Requirements:

- valid Cloudinary name and preset;
- if you don't have ones, ping me;

## How to install:

- clone the repo;
- run `bundle`
- run `rails db:migrate`
- run `rails db:seed`

## How to configure Cloudinary:

- add your Cloudinary credentials in the `.env` file in the root directory:
  ```
  CLOUD_NAME=cloudinary_cloud_name
  CLOUDINARY=cloudinary_template_name
  ```

## How to run locally:

- cd in the root directory;
- run `foreman start -f procfile.dev`

## How to use:

- really?

## Notes:

- the app _does not_ return error messages to the frontend or the browser console - figure it out yourself ;)
- once images are uploaded, the frontend will attempt to upload them to Cloudinary and store the Cloudinary image URLs in the DB;
- the existing Cloudinary image URLs in the seed data expire, so you might see broken HTML image elements on `/history`;
- the image recognition does not require Cloudinary credentials but the rest of the features of the app will not work as intended;
- since the Tensorflow model loads and runs entirely in the frontend, it may be slow for some users;

## Resources:

- followed [this tutorial](https://www.youtube.com/watch?v=nxAsWjSc-94) for the image recognition part and build on top of it. It's a great video by the author - Jonny Kalambay - make sure to follow him on [YouTube](https://www.youtube.com/channel/UCUm0chMKj4MA7q9CWZXWhiA);
- the [Altcademy](https://www.altcademy.com/) materials from their [FullStack WebDev](https://www.altcademy.com/programs/fswd) course;

## Shoutouts:

- [@ifinnsson](https://github.com/ifinnsson) for seeding in my head the idea to create this monstrosity;
- [@ahmad-elassuty](https://github.com/ahmad-elassuty) for always having my back.
