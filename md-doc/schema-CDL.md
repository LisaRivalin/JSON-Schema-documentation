
# JSON Schema for CDL files

The raw schema can be found here :
```
schemas/schema-CDL.json
```

Json representation of a CDL file. The schemas has
[core properties](#core-properties) constructed using [definitions](#Definitions).


| Abstract  |  JSON-Schema draft |  version |last update | Additional Properties | Type |
|----------|------------|--------|--------------|-------------------|---|
| Structure of a Json file derived from CDL  | 07 | 1 | March 2019 |Forbidden | array containing objects |

# <a name="core-properties"></a> Core properties

The schema defines an array with all elements of the type `object`.

The array object has the following properties (see above for more detail on each property).

| Property | Type | Required | constraint |
|----------|------|-------|------|
|  [modelicaFile](#modelicaFile) | string  | Yes  | string pattern |
|  [within](#within) | string  | No  | string pattern |
|  [topClassName](#topClassName) | string  | Yes  | string pattern  |
|  [comment](#comment)  |  string |  No |  None |
|  [public](#public)  | object  |  No |  None |
|  [protected](#protected) | object  | No  |  None |
|  [connections](#connections)| array  | No  | None  |
|  [info](#info) | string  | No  |  string pattern |
|  [extends](#extends) | [ModelicaBlock](#ModelicaBlock) | No  |  None |
|  [icon](#icon) | [GraphicalBlock](#GraphicalBlock)  | Yes  | must contain a [coordinateSystem](#coordinatesystem) element  |
| [diagram](#diagram)  | [GraphicalBlock](#GraphicalBlock)   |  No | must constain a [coordinateSystem](#coordinatesystem) element  |
| [vendorAnnotation](#vendorAnnotation)  | [ModelicaBlock/items/properties/annotation](#annotation)  |  No |  None |
| [svg](#svg)  | object  | Yes  | None  |

## <a name="modelicaFile"></a>`modelicaFile` (string, required)
Name of the Modelica file, must end with ".mo" .

Additional restrictions:

* Regex pattern: `.*.(mo|MO)`

## <a name="within"></a>`within` (string)

Within statement from the Modelica file : no special characters or spaces allowed.

Additional restrictions:

* Regex pattern: `^([a-zA-Z0-9._*]*)$`

## <a name="topClassName"></a>`topClassName` (string, required)

Name of the top class of the Modelica model: no special characters or spaces allowed.

Additional restrictions:

* Regex pattern: `^([a-zA-Z0-9._*]*)$`

## <a name="comment"></a>`comment` (string)

Comments on the model.

## <a name="public"></a> `public` (object)

Public part of the modelica file.

* Additional properties : Forbidden

The `public` object has the following properties (see above for more detail on each property). :

| Property | Type | Required | constraint |
|----------|------|-------|------|
| [parameters](#parameters)  | [ModelicaBlock](#ModelicaBlock)  | No  | None  |


### <a name="parameters">`parameters` (ModelicaBlock)

### `models` (ModelicaBlock)

### `inputs` (ModelicaBlock)

### `outputs` (ModelicaBlock)

## `protected` (object)

Protected part of the modelica file

Properties of the `protected` object:

### `parameters` (ModelicaBlock)

### `models` (ModelicaBlock)

## `connections` (array)

The object is an array with all elements of the type `array`.

## `info` (string)

Informations of the model must be in html format

Additional restrictions:

* Regex pattern: `^(<(html|HTML)>)(.|
)*(</(html|HTML)>)$`

## `extends` (ModelicaBlock)

## `icon` (GraphicalBlock, required)

## `diagram` (GraphicalBlock)

## `vendorAnnotation` (ModelicaBlock/items/properties/annotation)

## `svg` (object, required)

Properties of the `svg` object:

### `icon`

### `diagram`


# <a name="Definitions"></a>Definitions
---

| Property | Type | Group |
|----------|------|-------|
| [b](#b) | `number` | `schema-CDL.json#/definitions/color` |
