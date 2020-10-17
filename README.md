To convert graphql to postman collection, first you need graphql schema. Graphql schema can be downloaded by running introspection query on the graphql server end point. Here is how to do it.

1. Install graphql-cli

   ```
   npm i -g apollo
   ```

2. Download schema from the graphql server

   ```
   apollo schema:download --endpoint=http://localhost:4000/graphql schema.json
   ```

Convert schema into graphql collection

```javascript
const fs = require('fs')
const converter = require('graphql-to-postman')

const schema = fs.readFileSync('./schema.json')
converter.convert({
    type: 'string',
    data: schema.toString(),
}, {}, async function (error, result) {
    if (error) {
        log.error('Conversion failed')
    } else {
        const outputData = result.output[0].data
        fs.writeFileSync('output-collection.json', JSON.stringify(outputData))
        console.log('Conversion success');
    }
})
```



