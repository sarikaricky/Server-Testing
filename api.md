### Users API
This api's permits acess to a database of Users
and perform the following functions to the data Register a new User,
login with a User's Credentials, Display a list of Users, Update a User's information, and Delete a User.

#To start MongoDB
1. Ensure MongoDB installed 
*mongodb should be accessible 
*follow this tutorial
2. Run this command from the root directory:
* 'npm run dbstart'
* If all executed well it will have an instance of mongodb running on that terminal

# Api Endpoints
#### All api calls should be directed to:
```http://localhost:5000/api```
#### Use the following Endpoints:
| Endpoint | Type | Data | Result |
|:---------|:--:|:--:|:-:|
|/register|Post|Json|Returns the user's id
#### Registration Object Example:
```JSON
{
    "email":"test2@test2.com",
    "password":"asdf",
    "aboutme": "I do funny stuff to code"
}
```

| Endpoint | Type | Data | Result |
|:---------|:--:|:--:|:-:| 
|/login|Post|Json|Returns the logged in user|
#### Log-In Object Example:
```JSON
{
    "email":"test2@test2.com",
    "password":"asdf"

}
```


| Endpoint | Type | Data | Result |
|:---------|:--:|:--:|:-:| 
|/update/:id|Put|Json|Returns the updated user|
#### Update Object Example:
```JSON
{
    "aboutme": "I do great stuff to code"
}
```

| Endpoint | Type | Data | Result |
|:---------|:--:|:--:|:-:| 
|/delete/:id|delete|Json|Returns {msg: user has been deleted!}|
#### Delete Object Example:
```JSON
{
    "email":"test2@test2.com",
    "password":"asdf"
}
```

| Endpoint | Type | Data | Result |
|:---------|:--:|:--:|:-:|
|/users|Post|Json|Returns a list of users|
