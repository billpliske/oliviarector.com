# OliviaRector.com

## Apps page
https://us-west-1.console.aws.amazon.com/amplify/apps


## Quickstart
https://docs.amplify.aws/vue/start/quickstart/



Some notes about this project, in case I'm not making changes for many months.

- Icons: https://icon-sets.iconify.design/

- **Tutorial I followed**: https://docs.amplify.aws/start/getting-started/data-model/q/integration/vue/

# Pushing up changes

- regular push to bitbucket
- regular PR to master

# AWS GraphiQL

- https://us-west-1.console.aws.amazon.com/appsync/home?region=us-west-1#/brgxkfe4jfckzlexswaiufsew4/v1/queries

## Accessing DB to remove items GraphiQL can't

- Choose Datra sources in same menu as Queries
- Select table's Resource link
- Explore table items (top right)

### Watching a build

- https://us-west-1.console.aws.amazon.com/amplify/home?region=us-west-1#/d1zdhh9152jp15

### Relations

Pretty easy to set up, but a little different than how Fauna handled Favorites.
Essentially, I'll need to:

1. Create a Fav.
2. Delete the Fav.

**Relation Docs**

1. Has one: https://docs.amplify.aws/cli-legacy/graphql-transformer/connection/#has-one
2. Has many: https://docs.amplify.aws/cli-legacy/graphql-transformer/connection/#has-one
3. Many to Many: https://docs.amplify.aws/cli-legacy/graphql-transformer/connection/#many-to-many-connections

### Scalar types

- https://docs.aws.amazon.com/appsync/latest/devguide/scalars.html

### GraphiQL

1. https://us-west-1.console.aws.amazon.com/amplify/home?region=us-west-1#/d1zdhh9152jp15/YmFja2VuZA/dev
2. View in AppSync button
3. Run a query button

### When ready, how to add domain to Cloudflare and make live

- https://docs.aws.amazon.com/amplify/latest/userguide/to-add-a-custom-domain-managed-by-a-third-party-dns-provider.html
- When I added it to Cloudflare, I:
  - I first had to add a CNAME with a really long name
  - Wait for a bit, and then once that it done, ignore the A NAME they gave me.
  - Add the other CNAME they gave me.

### Amplify Console (Redirects)

- source: </^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json|webp)$)([^.]+$)/>
- target: /index.html
  type: 200 (Rewrite)

### Adding a query sort field

- https://github.com/aws-amplify/amplify-cli/issues/2307
- note the addition of a 'type' field, too.
- https://docs.amplify.aws/cli/migration/transformer-migration/#changes-that-amplify-cli-will-auto-migrate-for-you

```
type Event @model {
  id: ID! @index(name: "byStartDate", sortKeyFields: ["startDate"])
  name: String!


type Contest @model {
  id: ID! @index(name: "byDeadlineDate", sortKeyFields: ["deadlineDate"])
  name: String!
```

### When your API key expires

1.  Edit and update it here: https://us-west-1.console.aws.amazon.com/appsync/home?region=us-west-1#/brgxkfe4jfckzlexswaiufsew4/v1/settings
2.  In api/[name]/parameters.json, set CreateAPIKey: 0 (be sure to add the comma after the previous line if you are dding this at the end).
3.  In backend/backend-config.json remove any JSON attribute array values of GraphQLAPIKeyOutput. For example, change the following (there should be one for each Lambda which uses the API):
    "attributes": [
    "GraphQLAPIIdOutput",
    "GraphQLAPIEndpointOutput",
    "GraphQLAPIKeyOutput"
    ]
    to

              "attributes": [
                  "GraphQLAPIIdOutput",
                  "GraphQLAPIEndpointOutput"
              ]

4.  amplify env checkout [envName]
5.  amplify push -y - on completion, the key should have been removed from the application and Lambdas.
6.  In api/[name]/parameters.json, remove CreateAPIKey: 0
7.  amplify env checkout [envName]
8.  amplify push -y- on completion, the key should have been restored to the application, but not the Lambdas
9.  If that all works, do another `git push origin master`

### Firebase users

- https://console.firebase.google.com/u/0/project/myartevents-3259b/authentication/users