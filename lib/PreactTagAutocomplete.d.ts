import { Component, JSX } from 'preact';

export type Item = { id: number, name: string };
export type PreactTagAutocompleteProps = {
  onDelete: (tagIndex: number) => void,
  onAddition: (newTag: Item) => void,

  id?: string,
  tags?: Item[],
  placeholderText?: string,
  ariaLabelText?: string,
  removeButtonText?: string,
  noSuggestionsText?: string,
  newTagText?: string,
  suggestions?: Item[],
  suggestionsFilter: (suggestion: Item, query: string) => boolean,
  suggestionsTransform: (query: string, suggestion: Item) => boolean,
  autoresize?: bool,
  delimiters?: string[],
  onInput?: (query: string) => void,
  onFocus?: () => void,
  onBlur?: () => void,
  onValidate?: () => void,
  minQueryLength?: number,
  maxSuggestionsLength?: number,
  classNames?: {
    root: string = 'preact-tag-ac',
    rootFocused: string = 'is-focused',
    selected: string = 'preact-tag-ac__selected',
    selectedTag: string = 'preact-tag-ac__selected-tag',
    selectedTagName: string = 'preact-tag-ac__selected-tag-name',
    search: string = 'preact-tag-ac__search',
    searchWrapper: string = 'preact-tag-ac__search-wrapper',
    searchInput: string = 'preact-tag-ac__search-input',
    suggestions: string = 'preact-tag-ac__suggestions',
    suggestionActive: string = 'is-active',
    suggestionDisabled: string = 'is-disabled',
    suggestionPrefix: string = 'preact-tag-ac__suggestion-prefix'
  },
  allowNew?: bool = true,
  allowBackspace?: bool,
  addOnBlur?: bool,
  tagComponent?: JSX.Element | ((opts: { tag: Item, removeButtonText: string, onDelete: (tagIndex: number) => void }) => JSX.Element),
  suggestionComponent?: JSX.Element | ((opts: { item: Item, query: string }) => JSX.Element),
  inputAttributes?: {
    [attrName: string]: string
  }
}

type PreactTagAutocompleteStates = {
  query: string,
  focused: boolean,
  index: number
}

export default class PreactTagAutocomplete extends Component<PreactTagAutocompleteProps, PreactTagAutocompleteStates> {};
