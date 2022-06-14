##Weather App 
##Agency Analytics - Frontend Assignment

Project URL: http://44.206.239.10/ (https not supported because of no custom domain)
Git repo URL: https://github.com/MoidHasanBeig/agency-analytics-assmt

##API used for fetching weather data: 
https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

Temperature for each day is taken as the maximum temperature for the day
Weather displayed for each city is according to their respective timezones.
During development it was noticed that the API has a rare downtime of a couple of minutes at random moments.

##Tech stack / Tools / Libraries used:
Frontend: ReactJS* with Typescript
Server: AWS EC2 instance
Styling components: LESS
Font pack: Fontawesome
*React Class components have been used throughout the program instead of Functional components.

##Deployment steps to AWS EC2 via SSH:

#Install Git bash
sudo yum install git


#Clone the code repo on your EC2 instance
git clone https://github.com/MoidHasanBeig/agency-analytics-assmt.git


#Install node version manager and eventually install node & npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node

#Navigate to project folder
cd agency-analytics-assmt

#Install project dependencies
npm i

#Build project
npm run build


#Install PM2 to manage server load balancing and auto-start the project when server turns on
npm install pm2 -g


#Navigate to the server folder
cd server


#Run this command to start the application
pm2 start server.js


#Reroute the current port to port 80
sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080


#Run this command to auto start the project every time the server restarts
pm2 startup
