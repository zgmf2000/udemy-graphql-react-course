# GraphQL Query Samples
There are several different query types in GraphQL. Here are some of them:

## Basic Query Sample
GraphQL queries are very simple. You just need to call the query name, set a parameter, then list
the fields you want to output:
```
{
  user (id: "40") {
    id,
    firstName,
    age
  }
}
```

### Nested Query Sample
Like other backend APIs, GraphQL also supports nested properties. The following example depicts the
information of a user with ID 40, along with the company information he/she is working at. Notice
that the nested query also includes a list of desired properties:
```
{
  user (id: "40") {
    id,
    firstName,
    age,
    company {
      name,
      description
    }
  }
}
```

## Custom Field Name Sample
Suppose you want to look up several users with different ID. You are not allowed to do the 
following:
```
{
  company(id: "1") {
      id,
      name,
      description
  },
  company(id: "2") {
      id,
      name,
      description
  }
}
```
Why is the query above not allowed? Because JSON is not allowed to have multiple keys with the same 
name. You can, however, rename a property, like the following:
```
{
  apple: company(id: "1") {
      id,
      name,
      description
  },
  google: company(id: "2") {
      id,
      name,
      description
  }
}
```
The query above will produce two properties: `apple` and `google`, but they will contain the company
information you are looking for. This could come in handy in some situations.

## Query Fragment Sample
If you have duplication OCD, most probably you'll be annoyed by the duplication of `id`, `name`, and 
`description` in the previous section. 

Don't worry, we can 'extract' those duplications into something called `Query Fragments`. Doing so
is quite simple, you just need to declare the fragment name, point out which `Type` it belongs to,
then use it.

Look at the following example:
```
{
  apple: company(id: "1") {
    ...companyDetails
  },
  google: company(id: "2") {
    ...companyDetails
  }
}

fragment companyDetails on Company {
  id,
  name,
  description
}
```
