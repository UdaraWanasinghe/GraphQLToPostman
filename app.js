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