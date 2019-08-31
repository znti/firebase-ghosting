# Firebase-SQL

This is a node.js server using PostgreSQL database for storing your application data.

## Why?

Firebase is an amazing service and offers a vast set of tools for going serverless while developing applications for web and mobile.

However, there are often times I faced an increase of complexity by trying to map application that have high-coupling between datasets that could be easily described using SQL.

Thats why this project was born: it aims to use Firebase's Firestore as a fallback datastore while exposing it as SQL-powered server.

## How?

The basic idea is to map you own data on a SQL database schema and let the tool do the rest.

Say you have an `users` table with the following data

```js
	User = {
		userId,
		name,
		role,
	}
```

Now lets assume, in an attempt to implement RBAC, you'd like to assign the `role` entry a reference to a specific type contained in the `roles` table

```js
	Role = {
		roleId,
		name,
		description,
	}
```

Having this initial structure, you can now track what an `user` does by assigning its ID into an `history` table, where each entry can be described as:

```js
	Entry = {
		user,
		action,
	}
```

But each action is described on its own table, `action`, with the following structure:

```js
	Action: {
		actionId,
		name,
		description,
	}
```

It becomes clear that each of these tables can be directly mapped into a Firestore collection, having a property serving as Foreign Key - although not enforcing it.

That's my premisse for trying to map the tables as collections and isolating in the SQL side the enforcement of constraints, while saving the data on Firebase in case it needs to be restored (while Firebase ensures your data wont be lost, this service might not, depending on how you host it).

-- for now, these are the guidelines. I'll add extra info as I progress in developing its features.

