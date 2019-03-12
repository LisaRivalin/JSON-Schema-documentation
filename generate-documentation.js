var parse = require('json-schema-to-markdown')
var schema = require('/home/lisarivalin/Projects/JSON-Schema-documentation/schemas/schema-modelica.json')
var markdown = parse(schema)

const fs = require('fs');
fs.writeFile('docu.md', markdown, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
