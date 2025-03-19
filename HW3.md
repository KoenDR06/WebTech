# Introduction

In this assignment, you will need to further extend your website and build an interactive client-server application that
implements the functionality of a social network for students. You can take inspiration from existing social network
applications. Make sure to remove the styling menus from the code of your HW2 submission.

## Functional Requirements

- [ ] The starting page of your website should be a login screen with a registration option.
  - [ ] A user should be able to either login or register a new profile.
  - [ ] When registering, a user should be able to:
    - provide their first and last name
    - age
    - email
    - photo
    - program/major
    - hobbies
    - a list of taken courses.
    - Programs and Courses can be selected from lists of available options. After a registration, a user becomes logged-in.

Once logged-in, a user can:
- [ ] modify their profile by changing any information about themselves.
- [ ] browse through the list of courses they have taken, and by clicking on a course they can see the names and photos of all other students who have taken this course.
- [ ] send a friend request to other students who have taken the same course.
- [ ] accept friend requests sent by other users.
- [ ] browse complete profiles of their friends, but only of their friends.
- [ ] if another student is not a confirmed friend yet, only their photo and a name can be accessible in case they have taken the same course.
- [ ] if this student has no shared courses, they are completely unknown to the user.
- [ ] send messages to friends.
- [ ] receive message from friends.

- If a user deletes a course, they should not lose friends because of it.
- It is up to you whether to implement the unfriend option or not.

## Technical requirements

You are expected to apply the core technologies that we have studied during the course:

- [ ] HTML and CSS  – follow the requirements specified in Assignment 1 to make sure your website represents its content according to the recent standards. Make sure W3C HTML5.0 and CSS3.0 validators do not generate errors and warnings.
- [ ] Accessibility and Responsive Design - your pages must continue following the accessibility standards and be designed at least for screens of two resolutions: small - for mobile phones and large - for tablets and bigger (you are welcome to further split the design between tablets and laptops/desktops).
- [ ] JavaScript – your website must use JavaScript. Use ES6 classes to represent students and courses in your code.
- [ ] Node.JS (and its frameworks) – you need to implement the server side of your website with Node.JS. Usage of Express.JS is very much advised. You can use any additional Node.JS packages.
- [ ] Use sessions to maintain continuity of interaction between users. It should be possible for several users to be logged-in at the same time. You do not have to use persistent sessions (i.e. an unfinished editing of a profile or an unfinished message can "die" once a user logs-out).
- [ ] AJAX/Fetch – you will need AJAX/Fetch. At least one mandatory place for it is: displaying a large list of students who have taken the course. You can also use AJAX/Fetch in other places of your webapp if you choose so.
- [ ] It is up to you whether you use JSON or XML to exchange information between the client and the server (but use one of these formats).
- [ ] SQLite – students, courses, friend requests, messages should be stored in an SQLite database and accessed with the Node.JS using sqlite3 module. When they are displayed, the information must come from the database. When new users are registered and when existing users authenticate or change their profile, their information should be exchanged with a database. When a user makes a friend request, accepts a friend request, or send a message to a friend, the information should be added to the database as well.
- [ ] Your website should work at least on the last versions of Chrome and Firefox.
- [ ] Each HTML, CSS and JS file should have a comment at the top explaining the role and the functionality of the file and its structure. All JS methods and variables should have dedicated comments explaining their purpose.
- [ ] Use a logger recording all HTTP requests to your website.
- [ ] It is up to you whether or not to use HTML templating engines such as Jade.
- [ ] Make sure that your website is protected at least against SQL injections and Cross-site scripting.
- [ ] Populate your database with necessary data: add at least 3 programs, at least 10 courses, and at least 50 students, create some friend connections and some messages.


## Procedure and Submission

- You complete this assignment as a group. Make sure to follow the instructions given in the HW3 tutorial. This tutorial explains in detail how to use your web-space and configure your website at http://webtech.science.uu.nl/
- The submission consists of two parts:
  - the live version of your online web app at http://webtech.science.uu.nl/
  - the archive submitted through the BlackBoard

When submitting the archive, you need to zip your entire website including the HTML, CSS, client side JS and server side JS files, as well as the DB file and all the images. Make sure the overall size of your archive is not bigger than 50 Mb (you can and are encouraged to make it much smaller).
Add a readme.txt file containing the following:

- Your group id
- Names and student numbers of all authors;
- A direct link (full URL) to the location of the website at http://webtech.science.uu.nl/
- A brief explanation of your web-site, the structure of your application, including every content file and every code file, the structure of your database.
- Logins and passwords of all registered users.
- The SQL definition of your database (the CREATE TABLE statements).