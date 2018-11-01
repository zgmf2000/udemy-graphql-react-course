# GraphQL Mutation
Contrary to queries, GraphQL mutations are used to, well, mutate data. Create, Edit, Delete, you 
name it. It's quite different from queries, though.

## Creating Mutation

## Calling Mutation
For queries, you just need to declare an object literal with the query name along with the 
parameters. Mutations are a bit different. You need to use the word `mutation`, then object literal,
followed with the mutation you want to execute. Watch:

```
mutation {
    addUser(firstName: "Stephen", age: 26) {
        id, 
        firstName,
        age
    }
}
```

Like queries, however, you still need to list the fields you want to return. There's no way to get 
around this, unfortunately.
