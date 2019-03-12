
# JSON parsed Modelica file Schema

```
schema-modelica.json
```

Json representation of a Modelica model

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|--------------|-------------------|-----------------------|------------|
| Cannot be instantiated | Yes | Experimental | No | Forbidden | Permitted |  |

# JSON parsed Modelica file Definitions

| Property | Type | Group |
|----------|------|-------|
| [b](#b) | `number` | `schema-modelica.json#/definitions/color` |
| [coordinateSystem](#coordinatesystem) | `object` | `schema-modelica.json#/definitions/GraphicalBlock` |
| [g](#g) | `number` | `schema-modelica.json#/definitions/color` |
| [graphics](#graphics) | `object` | `schema-modelica.json#/definitions/GraphicalBlock` |
| [prefix](#prefix) | `string` | `schema-modelica.json#/definitions/value` |
| [r](#r) | `number` | `schema-modelica.json#/definitions/color` |
| [value](#value) | `string` | `schema-modelica.json#/definitions/value` |

## b


`b`

* is optional
* type: `number`
* defined in this schema

### b Type


`number`

* minimum value: `0`
* maximum value: `255`





## coordinateSystem


`coordinateSystem`

* is optional
* type: `object`
* defined in this schema

### coordinateSystem Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `extent`|  | Optional |
| `preserveAspectRatio`|  | Optional |



#### extent

undefined

`extent`

* is optional
* type: reference

##### extent Type


* []() – `#/definitions/graphicalElement/items/properties/extent`







#### preserveAspectRatio

undefined

`preserveAspectRatio`

* is optional
* type: reference

##### preserveAspectRatio Type


* []() – `#/definitions/graphicalElement/items/properties/preserveAspectRatio`










## g


`g`

* is optional
* type: `number`
* defined in this schema

### g Type


`number`

* minimum value: `0`
* maximum value: `255`





## graphics


`graphics`

* is optional
* type: `object`
* defined in this schema

### graphics Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `line`|  | Optional |
| `rectangle`|  | Optional |
| `text`|  | Optional |



#### line

undefined

`line`

* is optional
* type: complex

##### line Type


**All** of the following *requirements* need to be fulfilled.


#### Requirement 1


* []() – `#/definitions/graphicalElement`


#### Requirement 2









#### rectangle

undefined

`rectangle`

* is optional
* type: complex

##### rectangle Type


**All** of the following *requirements* need to be fulfilled.


#### Requirement 1


* []() – `#/definitions/graphicalElement`


#### Requirement 2









#### text

undefined

`text`

* is optional
* type: complex

##### text Type


**All** of the following *requirements* need to be fulfilled.


#### Requirement 1


* []() – `#/definitions/graphicalElement`


#### Requirement 2












## prefix


`prefix`

* is optional
* type: `string`
* defined in this schema

### prefix Type


`string`



All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E(%5Ba-zA-Z0-9._*%5D*)%24)):
```regex
^([a-zA-Z0-9._*]*)$
```






## r


`r`

* is optional
* type: `number`
* defined in this schema

### r Type


`number`

* minimum value: `0`
* maximum value: `255`





## value


`value`

* is optional
* type: `string`
* defined in this schema

### value Type


`string`






