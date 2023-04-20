# README

<h1>Irl<h1>

  
<h2>Description</h2>
A full stack web application built on a React frontend and Rails backend. This is a social media application that allows for user to create groups and mingle with people locally in their city of choice.


<h2>Installation</h2>

Install
- Step 1: run bundle install to install all rails gems
- Step 2: cd into the client and run npm install for all dependencies 
- Step 3: cd .. out of client folder
- Step 4: If you would like you can run rails db:seeds to get you started with groups, users and messages or you can skip and create all of your own.
- Step 5: cd .. out of client folder and enter sudo service postgresql start in your terminal to start your postgres server
- Step 6: Then run foreman start -f Procfile.dev
- Step 5: Now the app should be up and running and you can test it out

Notes on installation
- If you accidentally start a server before bundle installing and running npm you might have to kill the current port
  - run lsof -wni tcp:3000 to find the current PID
  - then run  kill -9 PID
  - run foreman start -f Procfile.dev and you should be good to go!
 
<h2>Visuals</h2>
<img src = "https://media1.giphy.com/media/gSNalQ94qedakEo7au/200w.webp"/>
<img src = "https://media1.giphy.com/media/3eLjKYrnf5HKR3GISk/200w.webp"/>


<h2>Authors and acknowledgment</h2>
Kale Leach


<h2>Project status</h2>
This project has been completed but is still being maintained by myself as I am constantly updating it with new things I learn.

<h2>Colors</h2>

Colors 
  - Cyclamen F06C9B
  - Brandeis Blue 256EFF
  - Maize FFE74C
  - Emerald 33CA7F
  - Red (crayola) EF6054


Acknowledge: 
Halo Labs - UX/ui
Orix Creative
