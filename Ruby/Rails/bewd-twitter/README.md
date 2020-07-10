# Twitter Clone

- Build API endpoints for a Twitter clone project:
  - user sign-up
  - user login
  - posting tweets
  - index all tweets
  - index tweets by user
- Frontend [source code](https://github.com/Altcademy/bewd-twitter)

# Specifications

## Tables / Model

### Users

- Attributes
  - username: format is string; indexed; enforce uniqueness
  - email: format is string; indexed; enforce uniqueness
  - password: format is string
  - timestamps: format is datetime
- Relationships
  - has many sessions
  - has many tweets
- Validations
  - username must be present; minimum 3 characters; maximum 64 characters; must be unique
  - password must be present; minimum 8 characters; maximum 64 characters
  - email must be present; minimum 5 characters; maximum 500 characters

### Sessions

- Attributes
  - token: format is string
  - user_id: format is integer being a foreign_key with indexing
  - timestamps: format is datetime
- Relationships
  - belongs to user
- Validations
  - generate session token before validations
  - user_id must be present

### Tweets

- Attributes
  - message: format is string
  - user_id: format is integer being a foreign_key with indexing
  - timestamps: format is datetime
- Relationships
  - belongs to user
- Validations
  - user_id must be present
  - message must be present; must not exceed 140 characters (that's the whole point of Twitter)

## API Endpoints

### POST /users

- Controller: `users`
- Action: `create`
- Description: create a new user based on given parameters
- Parameter: accept user object (i.e. `{ user: { username: "username", email: "email@email.com", password: "password" } }`)

### POST /sessions

- Controller: `sessions`
- Action: `create`
- Description: create a new session based on given parameters
- Parameter: accept user object (i.e. `{ user: { username: "username", password: "password" } }`)
- Procedures:
  - hash password input to compare with hashed password in database (this will validate whether the password is correct)
  - create a new session in database
  - set session token as a permanent cookie on browser

### GET /authenticated

- Controller: `sessions`
- Action: `authenticated`
- Description: validate user authentication by comparing cookie with session token
- Procedures
  - retrieve cookie, find cookie in sessions table
  - if session found, it means user is authenticated

### DELETE /sessions

- Controller: `sessions`
- Action: `destroy`
- Description: delete session token from database to log out a user
- Procedures
  - retrieve cookie, find cookie in sessions table
  - if session found, delete session (effectively logging out the user)

### POST /tweets

- Controller: `tweets`
- Action: `create`
- Description: create a new tweet based on given parameters
- Parameter: accept user object (i.e. `{ tweet: { message: "message" } }`)
- Procedures
  - retrieve current user based on session (retrieve session based on cookie)
  - create a new tweet that belongs to the current user

### DELETE /tweets/:id

- Controller: `tweets`
- Action: `destroy`
- Description: delete tweet based on given id
- Procedures:
  - retrieve current user based on session (retrieve session based on cookie)
  - delete tweet if current user is the tweet author

### GET /tweets

- Controller: `tweets`
- Action: `index`
- Description: get all tweets by all users
- Procedures:
  - get all tweets

### GET /users/:username/tweets

- Controller: `tweets`
- Action: `index_by_user`
- Description: get all tweet by one user (user's username as parameter)
- Procedures:
  - retrieve user based on user's username
  - get all tweets by that user
