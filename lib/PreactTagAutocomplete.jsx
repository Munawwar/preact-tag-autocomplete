import { Component, createRef } from 'preact'
import Tag from './Tag'
import Input from './Input'
import Suggestions from './Suggestions'
import { matchExact, matchPartial } from './concerns/matchers'
import { focusNextElement } from './concerns/focusNextElement'

const KEYS = {
  ENTER: 'Enter',
  TAB: 'Tab',
  BACKSPACE: 'Backspace',
  UP_ARROW: 'ArrowUp',
  UP_ARROW_COMPAT: 'Up',
  DOWN_ARROW: 'ArrowDown',
  DOWN_ARROW_COMPAT: 'Down'
}

const CLASS_NAMES = {
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

function findMatchIndex (options, query) {
  return options.findIndex((option) => matchExact(query).test(option.name))
}

function pressDelimiter () {
  if (this.state.query.length >= this.props.minQueryLength) {
    // Check if the user typed in an existing suggestion.
    const match = findMatchIndex(this.state.options, this.state.query)
    const index = this.state.index === -1 ? match : this.state.index
    const tag = index > -1 ? this.state.options[index] : null

    if (tag) {
      this.addTag(tag)
    } else if (this.props.allowNew) {
      this.addTag({ name: this.state.query })
    }
  }
}

function pressUpKey (e) {
  e.preventDefault()

  // if first item, cycle to the bottom
  const size = this.state.options.length - 1
  this.setState({ index: this.state.index <= 0 ? size : this.state.index - 1 })
}

function pressDownKey (e) {
  e.preventDefault()

  // if last item, cycle to top
  const size = this.state.options.length - 1
  this.setState({ index: this.state.index >= size ? 0 : this.state.index + 1 })
}

function pressBackspaceKey () {
  // when backspace key is pressed and query is blank, delete the last tag
  if (!this.state.query.length) {
    this.deleteTag(this.props.tags.length - 1)
  }
}

function defaultSuggestionsFilter (item, query) {
  const regexp = matchPartial(query)
  return regexp.test(item.name)
}

function getOptions (props, state) {
  let options

  if (props.suggestionsTransform) {
    options = props.suggestionsTransform(state.query, props.suggestions)
  } else {
    options = props.suggestions.filter((item) => props.suggestionsFilter(item, state.query))
  }

  options = options.slice(0, props.maxSuggestionsLength)

  if (props.allowNew && props.newTagText && findMatchIndex(options, state.query) === -1) {
    options.push({ id: 0, name: state.query, prefix: props.newTagText, disableMarkIt: true })
  } else if (props.noSuggestionsText && options.length === 0) {
    options.push({ id: 0, name: props.noSuggestionsText, disabled: true, disableMarkIt: true })
  }

  return options
}

class PreactTagAutocomplete extends Component {
  constructor (props) {
    super(props)

    this.state = {
      query: '',
      focused: false,
      index: -1
    }

    this.inputEventHandlers = {
      onBlur: this.onBlur.bind(this),
      onFocus: this.onFocus.bind(this),
      onInput: this.onInput.bind(this),
      onKeyDown: this.onKeyDown.bind(this)
    }

    this.container = createRef()
    this.input = createRef()
  }

  onInput (e) {
    const query = e.target.value

    if (this.props.onInput) {
      this.props.onInput(query)
    }

    // NOTE: This test is a last resort for soft keyboards and browsers which do not
    // support `KeyboardEvent.key`.
    // <https://bugs.chromium.org/p/chromium/issues/detail?id=763559>
    // <https://bugs.chromium.org/p/chromium/issues/detail?id=118639>
    if (
      query.length === this.state.query.length + 1 &&
      this.props.delimiters.indexOf(query.slice(-1)) > -1
    ) {
      pressDelimiter.call(this)
    } else if (query !== this.state.query) {
      this.setState({ query })
    }
  }

  onKeyDown (e) {
    // when one of the terminating keys is pressed, add current query to the tags
    if (this.props.delimiters.indexOf(e.key) > -1) {
      if (this.state.query || this.state.index > -1) {
        e.preventDefault()
      }

      pressDelimiter.call(this)
    }

    // when backspace key is pressed and query is blank, delete the last tag
    if (e.key === KEYS.BACKSPACE && this.props.allowBackspace) {
      pressBackspaceKey.call(this, e)
    }

    if (e.key === KEYS.UP_ARROW || e.key === KEYS.UP_ARROW_COMPAT) {
      pressUpKey.call(this, e)
    }

    if (e.key === KEYS.DOWN_ARROW || e.key === KEYS.DOWN_ARROW_COMPAT) {
      pressDownKey.call(this, e)
    }
  }

  onClick (e) {
    if (document.activeElement !== e.target) {
      this.focusInput()
    }
  }

  onBlur () {
    this.setState({ focused: false, index: -1 })

    if (this.props.onBlur) {
      this.props.onBlur()
    }

    if (this.props.addOnBlur) {
      pressDelimiter.call(this)
    }
  }

  onFocus () {
    this.setState({ focused: true })

    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  onDeleteTag (index, event) {
    // Because we'll destroy the element with cursor focus we need to ensure
    // it does not get lost and move it to the next interactive element
    if (this.container.current) {
      focusNextElement(this.container.current, event.currentTarget)
    }

    this.deleteTag(index)
  }

  addTag (tag) {
    if (tag.disabled) {
      return
    }

    if (typeof this.props.onValidate === 'function' && !this.props.onValidate(tag)) {
      return
    }

    this.props.onAddition({ id: tag.id, name: tag.name })

    this.clearInput()
  }

  deleteTag (i) {
    this.props.onDelete(i)
  }

  clearInput () {
    this.setState({
      query: '',
      index: -1
    })
  }

  clearSelectedIndex () {
    this.setState({ index: -1 })
  }

  focusInput () {
    if (this.input.current && this.input.current.input.current) {
      this.input.current.input.current.focus()
    }
  }

  render () {
    const TagComponent = this.props.tagComponent || Tag

    const expanded = this.state.focused && this.state.query.length >= this.props.minQueryLength
    const classNames = Object.assign({}, CLASS_NAMES, this.props.classNames)
    const rootClassNames = [classNames.root]

    this.state.focused && rootClassNames.push(classNames.rootFocused)

    return (
      <div ref={this.container} className={rootClassNames.join(' ')} onClick={this.onClick.bind(this)}>
        <div
          className={classNames.selected}
          aria-relevant='additions removals'
          aria-live='polite'
        >
          {this.props.tags.map((tag, i) => (
            <TagComponent
              key={i}
              tag={tag}
              removeButtonText={this.props.removeButtonText}
              classNames={classNames}
              onDelete={this.onDeleteTag.bind(this, i)}
            />
          ))}
        </div>
        <div className={classNames.search}>
          <Input
            {...this.state}
            id={this.props.id}
            ref={this.input}
            classNames={classNames}
            inputAttributes={this.props.inputAttributes}
            inputEventHandlers={this.inputEventHandlers}
            autoresize={this.props.autoresize}
            expanded={expanded}
            placeholderText={this.props.placeholderText}
            ariaLabelText={this.props.ariaLabelText}
          />
          {expanded && this.state.options.length
            ? <Suggestions
                {...this.state}
                id={this.props.id}
                classNames={classNames}
                expanded={expanded}
                addTag={this.addTag.bind(this)}
                suggestionComponent={this.props.suggestionComponent}
              />
            : null}
        </div>
      </div>
    )
  }

  static getDerivedStateFromProps (props, state) {
    if (state.prevQuery !== state.query || state.prevSuggestions !== props.suggestions) {
      return {
        prevQuery: state.query,
        prevSuggestions: props.suggestions,
        options: getOptions(props, state)
      }
    }

    return null
  }
}

PreactTagAutocomplete.defaultProps = {
  id: 'PreactTagAutocomplete',
  tags: [],
  placeholderText: 'Add new tag',
  removeButtonText: 'Click to remove tag',
  noSuggestionsText: null,
  newTagText: null,
  suggestions: [],
  suggestionsFilter: defaultSuggestionsFilter,
  suggestionsTransform: null,
  autoresize: true,
  classNames: CLASS_NAMES,
  delimiters: [KEYS.TAB, KEYS.ENTER],
  minQueryLength: 0,
  maxSuggestionsLength: 6,
  allowNew: false,
  allowBackspace: true,
  addOnBlur: false,
  tagComponent: null,
  suggestionComponent: null,
  inputAttributes: {}
}

export default PreactTagAutocomplete