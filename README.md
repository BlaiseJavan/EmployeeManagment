Employee management is system where manager of a company manages employees of the company.

# Documentation content

## API

#### Language

```
Javascript
```

#### Server Environment

```
 NodeJS (Run-time environment for running JS codes)
 ```

#### Framework

```
 Express
 ```

#### Testing Framework

```
 Mocha, Chai 
 ```

#### Style Guide

```
Airbnb
```

### Endpoints

| Enpoint | Methods  | Description  |
| ------- | --- | --- |
| /api/auth/signup | POST | Signup |
| /api/auth/signin | POST | Signin |
| /api/employees | POST | create new Employee |
| /api/employees/:id | PUT | update employee |
| /api/employees/:id | DELETE | Delete an employee |
| /api/employees/:id/search | GET | Search an employee |
| /api/employees/:id/active | PUT | Activate an employee |
| /api/employees/:id/suspend | PUT | Suspend an employee |


### Responses

#### On success

>{ "status": 200, "data": { ... } }
​
#### On error

>{ "status": 400, "message": "error-message" }
​

### API link

[API Documentation](https://documenter.getpostman.com/view/5307042/SVtVTnp7)

## Getting started

```
> npm install
```

It will install the node_modules which will help you run the project on your local machine.

#### Run the server

```
> npm run dev
```

#### Run the test

```
> npm test
```

## Copyright

&copy; BLAISE Irakoze
