# JSON parsed Modelica file

## (array)

Json representation of a Modelica model

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

#### `inputs` (ModelicaBlock)

#### `outputs` (ModelicaBlock)

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

### `icon` (GraphicalBlock)

### `diagram` (GraphicalBlock)

### `vendorAnnotation`

---

# Sub Schemas

The schema defines the following additional types:

## `coordinates` (array)

Coordinates on a 2d plan

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

## `graphicalElement` (array)

## `GraphicalBlock` (object)

Properties of the `GraphicalBlock` object:

### `graphics` (object)

Properties of the `graphics` object:

#### `line`

#### `rectangle`

#### `text`

### `coordinateSystem` (object)

Properties of the `coordinateSystem` object:

#### `extent`

#### `preserveAspectRatio`

## `ModelicaBlock` (array)

Info of a modelica block: model, parameter, input or output