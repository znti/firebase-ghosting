# Firebase-SQL

This is a node.js server using PostgreSQL database for storing your application data.

## Why?

Firebase is an amazing service and offers a vast set of tools for going serverless while developing applications for web and mobile.

However, there are often times I faced an great increase of complexity by trying to map application that have high-coupling between datasets and would be easily described using SQL.

Thats why this project was born: it aims to use firebase's firestore as a fallback datastore while exposing a SQL-powered server.

## How?

The basic idea is to map you own data on a SQL database schema and let the tool do the rest.

-- for now, these are the guidelines. I'll add extra info as I progress in developing its features.

