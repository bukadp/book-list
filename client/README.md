#To run application locally you need:

1.	Open any application in which will be possible to enter commands (cmd, bash or IDE with built-in command prompt (visual studio code, webstorm etc.))
2.	You need to install a node js or make sure that you have this program installed
3.	To check if you have nodejs installed, enter on the command prompt command:
###      `node -v`
  If you see in the console version of your program, message like:`v16.13.0` you can move on to the next step. If there is no such message, then you need to go to the website [https://nodejs.org/en/](https://nodejs.org/en/) and install the program. Install the program which marked LTS
4.	You must create a folder where the application will be copied. It better to do in your operating system (WindowsOS, MacOS etc.)
5.	Go in command prompt or open in the IDE the path where the application will be located
6.	To get a GitHub repository, enter on the command prompt command:
###  `git clone https://github.com/bukadp/book-list`
7.	To get all the necessary packages for the application enter the command:
###  `npm install`
8.	You need to go to the server folder, for this enter the command:
###  `cd server`
9.	You need to start the server, enter the command:
###  `json-server db.json -p 3001`
10.	You need to go to the client folder, enter the command:
###  `cd ../`
after enter the command:
###  `cd client`
11.	You need to start application, enter the command:
###  `npm start`
12. The application will be open in your default browser via the link
    [http://localhost:3000](http://localhost:3000)
