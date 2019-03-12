# JSON parsed Modelica file

## (array)

Json representation of a CDL model

The schema defines an array with all elements of the type `object`.

The array object has the following properties:

### `modelicaFile` (string, required)

Additional restrictions:

* Regex pattern: `.*.(mo|MO)`

### `within` (string)

Within statement from the Modelica file : no special characters or spaces

Additional restrictions:

* Regex pattern: `^([a-zA-Z0-9._*]*)$`

### `topClassName` (string, required)

Name of the top class of the Modelica model: no special characters or spaces 

Additional restrictions:

* Regex pattern: `^([a-zA-Z0-9._*]*)$`

### `comment` (string)

Comment on the model

### `public` (object)

Public part of the modelica file

Properties of the `public` object:

#### `parameters` (ModelicaBlock)

#### `models` (ModelicaBlock)

#### `inputs`

#### `outputs`

### `protected` (object)

Protected part of the modelica file

Properties of the `protected` object:

#### `parameters` (ModelicaBlock)

#### `models` (ModelicaBlock)

### `connections` (array)

The object is an array with all elements of the type `array`.

### `info` (string)

Informations of the model must be in html format

Additional restrictions:

* Regex pattern: `^(<(html|HTML)>)(.|
)*(</(html|HTML)>)$`

### `extends` (ModelicaBlock)

### `icon` (, required)

### `diagram`

### `vendorAnnotation`

### `svg` (object, required)

Properties of the `svg` object:

#### `icon`

#### `diagram`

---

# Sub Schemas

The schema defines the following additional types:

## `coordinates` (array)

Coordinates on a 2d plan

## `rgbcolors` (string)

This property must be one of the following types:

* `undefined`
* `undefined`

## `color` (object)

RGB colors

Properties of the `color` object:

### `r` (number, required)

Additional restrictions:

* Maximum: `255`

### `g` (number, required)

Additional restrictions:

* Maximum: `255`

### `b` (number, required)

Additional restrictions:

* Maximum: `255`

## `value` (object)

Properties of the `value` object:

### `prefix` (string)

Additional restrictions:

* Regex pattern: `^([a-zA-Z0-9._*]*)$`

### `value` (string, required)

## `textElement` (array)

## `graphicalElement` (array)

## `classElement` (array)

## `polygons` (array)

## `GraphicalBlock` (object)

Properties of the `GraphicalBlock` object:

### `graphics` (object)

Properties of the `graphics` object:

#### `polygon`

#### `line`

#### `rectangle`

#### `text`

#### `ellipse`

### `coordinateSystem` (object)

Properties of the `coordinateSystem` object:

#### `extent` (, required)

#### `preserveAspectRatio` (, required)

#### `initialScale` (number)

### `drawing` (string)

Additional restrictions:

* Regex pattern: `^(<(svg|SVG))(.|
)*(</(svg|SVG)>)$`

### `extent` (coordinates)

### `coordinate` (coordinates)

### `preserveAspectRatio` (boolean)

### `initialScale` (number)

### `items` (object)

Properties of the `items` object:

#### `width` (number, required)

#### `height` (number, required)

#### `hasDots` (boolean)

#### `layerPolygons` (polygons)

#### `classPolygons` (polygons)

#### `intPolygons` (polygons)

#### `connectionPolylines` (polygons)

#### `classRectangles`

#### `layerRectangles`

#### `layerPolylines`

#### `layerTexts` (textElement)

#### `connectionLineDots` (classElement)

#### `classEllipses` (classElement)

#### `classPolylines` (polygons)

#### `classTexts` (textElement)

#### `layerEllipses` (classElement)

## `ModelicaBlock` (array)

Info of a modelica block: model, parameter, input or output