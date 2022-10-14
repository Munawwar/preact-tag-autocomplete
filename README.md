# Preact Tag Autocomplete

Port of [react-tag-autocomplete](https://github.com/i-like-robots/react-tags).

Preact Tag Autocomplete is a simple tagging component ready for your Preact projects. [View demo](https://munawwar.github.io/preact-tag-autocomplete/).

![Screenshot of Preact Tag Autocomplete](https://cloud.githubusercontent.com/assets/271645/25478773/54aa2bbe-2b3a-11e7-95cf-d419f3c24418.png)

## Installation

This is a [Node.js] module available through the [npm] registry. Before installing, download and install Node.js.

Installation is done using the [npm install] command:

```
npm install --save preact-tag-autocomplete
```

[Node.js]: https://nodejs.org/en/
[npm]: https://www.npmjs.com/
[npm install]: https://docs.npmjs.com/getting-started/installing-npm-packages-locally

## Usage

Here's a sample implementation that initializes the component with an empty list of `tags` and a pre-populated list of `suggestions`. For further customization details, see [options](#options).

```js
import { useCallback, useRef, useState } from 'preact/hooks'
import PreactTagAutocomplete from 'preact-tag-autocomplete'

function App () {
  const [tags, setTags] = useState([])

  const [suggestions, setSuggestions] = useState([
    { id: 1, name: "Apples" },
    { id: 2, name: "Pears" },
    { id: 3, name: "Bananas" },
    { id: 4, name: "Mangos" },
    { id: 5, name: "Lemons" },
    { id: 6, name: "Apricots" }
  ])

  const ref = useRef()

  const onDelete = useCallback((tagIndex) => {
    setTags(tags.filter((_, i) => i !== tagIndex))
  }, [tags])

  const onAddition = useCallback((newTag) => {
    setTags([...tags, newTag])
  }, [tags])

  return (
    <PreactTagAutocomplete
      ref={ref}
      tags={tags}
      suggestions={suggestions}
      onDelete={onDelete}
      onAddition={onAddition}
    />
  )
}
```

### Options

- [`id`](#id-optional)
- [`tags`](#tags-optional)
- [`suggestions`](#suggestions-optional)
- [`suggestionsFilter`](#suggestionsfilter-optional)
- [`suggestionsTransform`](#suggestionsTransform-optional)
- [`placeholderText`](#placeholdertext-optional)
- [`ariaLabelText`](#arialabeltext-optional)
- [`removeButtonText`](#removeButtontext-optional)
- [`noSuggestionsText`](#noSuggestionsText-optional)
- [`newTagText`](#newtagtext-optional)
- [`autoresize`](#autoresize-optional)
- [`delimiters`](#delimiters-optional)
- [`minQueryLength`](#minquerylength-optional)
- [`maxSuggestionsLength`](#maxsuggestionslength-optional)
- [`classNames`](#classnames-optional)
- [`onAddition`](#onaddition-required)
- [`onDelete`](#ondelete-required)
- [`onInput`](#oninput-optional)
- [`onFocus`](#onfocus-optional)
- [`onBlur`](#onblur-optional)
- [`onValidate`](#onvalidate-optional)
- [`addOnBlur`](#addonblur-optional)
- [`allowNew`](#allownew-optional)
- [`allowBackspace`](#allowbackspace-optional)
- [`tagComponent`](#tagcomponent-optional)
- [`suggestionComponent`](#suggestioncomponent-optional)
- [`inputAttributes`](#inputAttributes-optional)

#### id (optional)

The ID attribute given to the listbox element. Default: `PreactTagAutocomplete`.

#### tags (optional)

An array of selected tags. Each tag is an object which must have an `id` and a `name` property. Defaults to `[]`.

```js
const tags =  [
  { id: 1, name: 'Apples' },
  { id: 2, name: 'Pears' }
]
```

#### suggestions (optional)

An array of tag suggestions. Each suggestion is an object which must have an `id` and a `name` property and an optional `disabled` property to make the suggestion non-selectable. Defaults to `[]`.

```js
const suggestions = [
  { id: 3, name: 'Bananas' },
  { id: 4, name: 'Mangos' },
  { id: 5, name: 'Lemons' },
  { id: 6, name: 'Apricots', disabled: true }
]
```

#### suggestionsFilter (optional)

A callback function to filter suggestion items with. The callback receives two arguments; a `suggestion` and the current `query` and must return a boolean value.

If no function is supplied the default filter is applied. Defaults to `null`.

**Note:** This filter will be ignored if [suggestionsTransform](#suggestionsTransform-optional) is supplied.

#### suggestionsTransform (optional)

A callback function to apply a custom filter to the suggestions. The callback receives two arguments; a `query` and the input [suggestions](#suggestions-optional) and must return a new array of suggestion items. Using this option you can filter and sort suggestions.

**Note:** This will supersede [suggestionsFilter](#suggestionsfilter-optional) in future.

```js
import matchSorter from "match-sorter";

function suggestionsFilter(query, suggestions) {
  return matchSorter(suggestions, query, { keys: ["name"] });
}
```

#### placeholderText (optional)

The placeholder string shown for the input. Defaults to `'Add new tag'`.

#### ariaLabelText (optional)

The aria-label string for the input. Defaults to placeholder string.

#### removeButtonText (optional)

The title text to add to the remove selected tag button. Default `'Click to remove tag'`.

#### noSuggestionsText (optional)

Message shown if there are no matching suggestions. Defaults to `null`.

#### newTagText (optional)

Enables users to show a prompt to add a new tag at the bottom of the suggestions list if `allowNew` is enabled. Defaults to `null`.

#### autoresize (optional)

Boolean parameter to control whether the text-input should be automatically resized to fit its value. Defaults to `true`.

#### delimiters (optional)

Array of keys matching `KeyboardEvent.key` values. When a corresponding key is pressed it will trigger tag selection or creation. Defaults to `['Enter', 'Tab']`.

#### minQueryLength (optional)

Minimum query length required to show the suggestions list. Defaults to `2`.

#### maxSuggestionsLength (optional)

Maximum number of suggestions to display. Defaults to `6`.

#### classNames (optional)

Override the default class names used by the component. Defaults to:

```js
{
  root: 'preact-tag-ac',
  rootFocused: 'is-focused',
  selected: 'preact-tag-ac__selected',
  selectedTag: 'preact-tag-ac__selected-tag',
  selectedTagName: 'preact-tag-ac__selected-tag-name',
  search: 'preact-tag-ac__search',
  searchWrapper: 'preact-tag-ac__search-wrapper',
  searchInput: 'preact-tag-ac__search-input',
  suggestions: 'preact-tag-ac__suggestions',
  suggestionActive: 'is-active',
  suggestionDisabled: 'is-disabled',
  suggestionPrefix: 'preact-tag-ac__suggestion-prefix'
}
```

#### onAddition (required)

Function called when the user wants to add a tag. Receives the tag.

```js
const [tags, setTags] = useState([])

function onAddition (newTag) {
  setTags([...tags, newTag])
}
```

#### onDelete (required)

Function called when the user wants to delete a tag. Receives the tag index.

```js
const [tags, setTags] = useState([])

function onDelete (tagIndex) {
  setTags(tags.filter((_, i) => i !== tagIndex))
}
```

#### onInput (optional)

Optional event handler when the input value changes. Receives the current query.

```js
const [isBusy, setIsBusy] = useState(false)

function onInput (query) {
  if (!isBusy) {
    setIsBusy(true)

    return fetch(`?query=${query}`).then((result) => {
      setIsBusy(false)
    })
  }
}
```

#### onFocus (optional)

Optional callback function for when the input receives focus. Receives no arguments.

#### onBlur (optional)

Optional callback function for when focus on the input is lost. Receives no arguments.

#### onValidate (optional)

Optional validation function that determines if tag should be added. Receives the tag object and must return a boolean.

```js
function onValidate (tag) {
  return tag.name.length >= 5;
}
```

#### addOnBlur (optional)

Creates a tag from the current input value when focus on the input is lost. Defaults to `false`.

#### allowNew (optional)

Enable users to add new (not suggested) tags. Defaults to `false`.

#### allowBackspace (optional)

Enable users to delete selected tags when backspace is pressed while focussed on the text input when empty. Defaults to `true`.

#### tagComponent (optional)

Provide a custom tag component to render. Receives the tag, button text, and delete callback as props. Defaults to `null`.

```jsx
function TagComponent ({ tag, removeButtonText, onDelete }) {
  return (
    <button type='button' title={`${removeButtonText}: ${tag.name}`} onClick={onDelete}>
      {tag.name}
    </button>
  )
}
```

#### suggestionComponent (optional)

Provide a custom suggestion component to render. Receives the suggestion and current query as props. Defaults to `null`.

```jsx
function SuggestionComponent ({ item, query }) {
  return (
    <span id={item.id} className={item.name === query ? 'match' : 'no-match'}>
      {item.name}
    </span>
  )
}
```

#### inputAttributes (optional)

An object containing additional attributes that will be applied to the text input. _Please note_ that this prop cannot overwrite existing attributes, it can only add new ones. Defaults to `{}`.


### API

By adding a `ref` to any instances of this component you can access its API methods.

#### `addTag(tag)`

Adds a tag to the list of selected tags. This will trigger the validation and addition callbacks.

#### `deleteTag(index)`

Removes a tag from the list of selected tags. This will trigger the delete callback.

#### `clearInput()`

Clears the input, current query and selected suggestion.

#### `clearSelectedIndex()`

Clears the currently selected suggestion.

#### `focusInput()`

Sets cursor focus to the text input element.

### Styling

It is possible to customize the appearance of the component, the included styles found in `/example/styles.css` are only an example.


### Development

The component is written in ES6 and uses [esbuild](https://github.com/evanw/esbuild) as its build tool. Tests are written with [Jasmine](https://jasmine.github.io/) using [JSDOM](https://github.com/jsdom/jsdom).

```sh
npm install
npm run dev # will open http://localhost:8080 and watch files for changes
```
