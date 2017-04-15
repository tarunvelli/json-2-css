#CONVERTS .JSON FILE TO .CSS FILE

## USE

```javascript
const json-2-css = require('json-2-css')

json-2-css(inputfile.json,outputfile.css)
```

## JSON format

The .json file has to be in this format for this to work :

```javascript
{
 "selector1":
    {
      "property1.1":"value1.1",
      "propery1.2":"value1.2"
    },
 "selector2":
    {
      "property2.1":"value2.1"
    }
}
```

> Trailing commas cause an error, be sure to remove them
 
