# Social Ape -- a social media app

### Description
A features complete social media app that is a little like twitter. Some app feature:
* you can login or signup to make an account with real password authentication
*  change/add bio and other details to your profile
*  change/add avatar image
*  posting screams(posts)
*  liking/commenting on screams
*  view other users profiles
*  recieve notifications on your posted screams 
*  loading skeletons

### Tech Stack
* **React** forntend library/framework
* **Material-UI** ui framework
* **Redux** for state management
* **Firebase** for database and storage
* **Node js** server
* **Express js** for making apis routes


### Main Folder Structure
```bash
├── README.md
├── package.json
├── public
│   └── index.html
└── socialape-functions/   # firebase folder
└── src
    ├── index.js
    ├── index.css
    ├── App.js
    ├── App.css
    ├── components   # app's reusable components
    │   ├── layout   # layout components
    │   │   ├── navbar.js 
    │   │   └── Notifications.js   # notification icon and messages 
    │   ├── profile    # profile components
    │   │   ├── EditDetails.js   # modal for edit user details like bio 
    │   │   ├── Profile.js   # profile section in home page
    │   │   └── StaticProfile.js   # profile section in user page
    │   └── scream
    │       ├── CommentForm.js   # add comment form in an open scream
    │       ├── Comments.js    # comments list
    │       ├── DeleteScream.js    # delete scream button and modal
    │       ├── LikeButton.js    # like scream button
    │       ├── PostScream.js    # add scream dialog
    │       ├── Scream.js    # scream card component
    │       └── ScreamDialog.js    # open scream dialog
    ├── images
    │   ├── monkey.png 
    │   └── no-img.jpeg    # image for new users
    ├── pages    # page components
    │   ├── home.js
    │   ├── login.js
    │   ├── signup.js
    │   └── User.js 
    ├── redux 
    │   ├── actions
    │   │   ├── dataAction.js    # action creator thunks for screams related state
    │   │   └── userAction.js    # action acreator thunks for user related state
    │   ├── reducers
    │   │   ├── dataReducer.js   # chagne scream state
    │   │   ├── uiReducer.js   # change ui state e.g. loading
    │   │   └── userReducer.js   # change users state
    │   ├── store.js   # define redux store
    │   └── types.js   # define redux actions types
    └── utils
        ├── AuthRoute.js   # ensure unauthunticated users don't access a certain routes
        ├── MyButton.js    # higher order component for app buttons
        ├── ProfileSkeleton.js   # loading skeleton for profile component
        ├── ScreamSkeleton.js    # loading skeleton for scream component
        └── theme.js   # styling object for material-ui styles provider
```

### Firebase Folder Structure
```bash
├── .firebaserc 
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── keys
│   └── admin.json # service account sdk to access some fb services
└── functions
    ├── index.js # initialize firestore and express server
    ├── package.json 
    ├── handlers # functions of the apis
    │   ├── screams.js # scream related functions
    │   └── users.js # users related functions
    ├── utils
        ├── admin.js # intialize the admin and firestore
        ├── config.js # SDK configuration
        ├── fbauth.js # test if user is authorized
        └── validators.js # validate forms input
```

### How to try it?
Unfortunately, firebase doesn't allow deploying untill you are on the paid plan so i couldn't deploy the app. But if you like you can change the initial state in redux reducers and store files and run the frontend of the app or alternatively see some screenshots of the project in behance https://www.behance.net/gallery/104837267/Socialape-the-social-media-app, sorry for that inconvenience.

##### Made by YusefNsar