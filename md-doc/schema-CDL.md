
# JSON parsed Modelica file Schema

```
schema-CDL.json
```

Json representation of a Modelica model

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|--------------|-------------------|-----------------------|------------|
| Cannot be instantiated | Yes | Experimental | No | Forbidden | Permitted |  |

# JSON parsed Modelica file Definitions

| Property | Type | Group |
|----------|------|-------|
| [b](#b) | `number` | `schema-CDL.json#/definitions/color` |
| [coordinate](#coordinate) | reference | `schema-CDL.json#/definitions/GraphicalBlock` |
| [coordinateSystem](#coordinatesystem) | `object` | `schema-CDL.json#/definitions/GraphicalBlock` |
| [drawing](#drawing) | `string` | `schema-CDL.json#/definitions/GraphicalBlock` |
| [extent](#extent) | reference | `schema-CDL.json#/definitions/GraphicalBlock` |
| [g](#g) | `number` | `schema-CDL.json#/definitions/color` |
| [graphics](#graphics) | `object` | `schema-CDL.json#/definitions/GraphicalBlock` |
| [initialScale](#initialscale) | `number` | `schema-CDL.json#/definitions/GraphicalBlock` |
| [items](#items) | `object` | `schema-CDL.json#/definitions/GraphicalBlock` |
| [prefix](#prefix) | `string` | `schema-CDL.json#/definitions/value` |
| [preserveAspectRatio](#preserveaspectratio) | `boolean` | `schema-CDL.json#/definitions/GraphicalBlock` |
| [r](#r) | `number` | `schema-CDL.json#/definitions/color` |
| [value](#value) | `string` | `schema-CDL.json#/definitions/value` |

## b


`b`

* is optional
* type: `number`
* defined in this schema

### b Type


`number`

* minimum value: `0`
* maximum value: `255`





## coordinate


`coordinate`

* is optional
* type: reference
* defined in this schema

### coordinate Type


* []() – `#/definitions/coordinates`





## coordinateSystem


`coordinateSystem`

* is optional
* type: `object`
* defined in this schema

### coordinateSystem Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `extent`|  | **Required** |
| `initialScale`| number | Optional |
| `preserveAspectRatio`|  | **Required** |



#### extent

undefined

`extent`

* is **required**
* type: reference

##### extent Type


* []() – `#/definitions/graphicalElement/items/properties/extent`







#### initialScale

undefined

`initialScale`

* is optional
* type: `number`

##### initialScale Type


`number`

* minimum value: `0`








#### preserveAspectRatio

undefined

`preserveAspectRatio`

* is **required**
* type: reference

##### preserveAspectRatio Type


* []() – `#/definitions/graphicalElement/items/properties/preserveAspectRatio`










## drawing


`drawing`

* is optional
* type: `string`
* defined in this schema

### drawing Type


`string`



All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E(%3C(svg%7CSVG))(.%7C%0A)*(%3C%2F(svg%7CSVG)%3E)%24)):
```regex
^(<(svg|SVG))(.|
)*(</(svg|SVG)>)$
```






## extent


`extent`

* is optional
* type: reference
* defined in this schema

### extent Type


* []() – `#/definitions/coordinates`





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
| `ellipse`|  | Optional |
| `line`|  | Optional |
| `polygon`|  | Optional |
| `rectangle`|  | Optional |
| `text`|  | Optional |



#### ellipse

undefined

`ellipse`

* is optional
* type: complex

##### ellipse Type


**All** of the following *requirements* need to be fulfilled.


#### Requirement 1


* []() – `#/definitions/graphicalElement`


#### Requirement 2









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









#### polygon

undefined

`polygon`

* is optional
* type: complex

##### polygon Type


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












## initialScale


`initialScale`

* is optional
* type: `number`
* defined in this schema

### initialScale Type


`number`

* minimum value: `0`






## items


`items`

* is optional
* type: `object`
* defined in this schema

### items Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `classEllipses`|  | Optional |
| `classPolygons`|  | Optional |
| `classPolylines`|  | Optional |
| `classRectangles`|  | Optional |
| `classTexts`|  | Optional |
| `connectionLineDots`|  | Optional |
| `connectionPolylines`|  | Optional |
| `hasDots`| boolean | Optional |
| `height`| number | **Required** |
| `intPolygons`|  | Optional |
| `layerEllipses`|  | Optional |
| `layerPolygons`|  | Optional |
| `layerPolylines`|  | Optional |
| `layerRectangles`|  | Optional |
| `layerTexts`|  | Optional |
| `width`| number | **Required** |



#### classEllipses

undefined

`classEllipses`

* is optional
* type: reference

##### classEllipses Type


* []() – `#/definitions/classElement`







#### classPolygons

undefined

`classPolygons`

* is optional
* type: reference

##### classPolygons Type


* []() – `#/definitions/polygons`







#### classPolylines

undefined

`classPolylines`

* is optional
* type: reference

##### classPolylines Type


* []() – `#/definitions/polygons`







#### classRectangles

undefined

`classRectangles`

* is optional
* type: complex

##### classRectangles Type


**All** of the following *requirements* need to be fulfilled.


#### Requirement 1


* []() – `#/definitions/polygons`


#### Requirement 2









#### classTexts

undefined

`classTexts`

* is optional
* type: reference

##### classTexts Type


* []() – `#/definitions/textElement`







#### connectionLineDots

undefined

`connectionLineDots`

* is optional
* type: reference

##### connectionLineDots Type


* []() – `#/definitions/classElement`







#### connectionPolylines

undefined

`connectionPolylines`

* is optional
* type: reference

##### connectionPolylines Type


* []() – `#/definitions/polygons`







#### hasDots

undefined

`hasDots`

* is optional
* type: `boolean`

##### hasDots Type


`boolean`







#### height

undefined

`height`

* is **required**
* type: `number`

##### height Type


`number`

* minimum value: `0`








#### intPolygons

undefined

`intPolygons`

* is optional
* type: reference

##### intPolygons Type


* []() – `#/definitions/polygons`







#### layerEllipses

undefined

`layerEllipses`

* is optional
* type: reference

##### layerEllipses Type


* []() – `#/definitions/classElement`







#### layerPolygons

undefined

`layerPolygons`

* is optional
* type: reference

##### layerPolygons Type


* []() – `#/definitions/polygons`







#### layerPolylines

undefined

`layerPolylines`

* is optional
* type: complex

##### layerPolylines Type


**All** of the following *requirements* need to be fulfilled.


#### Requirement 1


* []() – `#/definitions/polygons`


#### Requirement 2









#### layerRectangles

undefined

`layerRectangles`

* is optional
* type: complex

##### layerRectangles Type


**All** of the following *requirements* need to be fulfilled.


#### Requirement 1


* []() – `#/definitions/polygons`


#### Requirement 2









#### layerTexts

undefined

`layerTexts`

* is optional
* type: reference

##### layerTexts Type


* []() – `#/definitions/textElement`







#### width

undefined

`width`

* is **required**
* type: `number`

##### width Type


`number`

* minimum value: `0`











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






## preserveAspectRatio


`preserveAspectRatio`

* is optional
* type: `boolean`
* defined in this schema

### preserveAspectRatio Type


`boolean`





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





