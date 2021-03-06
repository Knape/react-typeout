import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { shuffle, move, pop, getFirst } from './utils';

class TypeOut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentSentence: this.props.words[0],
    };

    this.addChar = this.addChar.bind(this);
    this.removeChar = this.removeChar.bind(this);
    this.changeWord = this.changeWord.bind(this);
  }

  componentDidMount() {
    if (this.props.words.length < 1) {
      console.warn('react-typeout requires a length minimum of one');
      return;
    }
    this.changeWord(null, this.props.words);
  }

  /**
   * Clear timouts when unmounting so we can escape our recursive loop
   */
  componentWillUnmount() {
    clearTimeout(this.addTimeout);
    clearTimeout(this.removeTimeout);
  }

  setNewOrder(words, random) {
    return random ? shuffle(words) : move(words);
  }

  popLastWord(words, lastWord, infinitive) {
    return infinitive ? words : pop(words, lastWord);
  }

  /**
   * Alters currentSentence string to include one more char
   *
   * @param  {Number} index   The current index of the word we slicing
   * @param  {Number} max     The max length of the word.
   * @param  {string} word    The entire word.
   */
  addChar(index, max, words) {
    const { typeSpeed, pauseSpeed } = this.props;
    // When we get to the last char in the word we stop read the pauseSpeed
    // instead of the typeSpeed
    const addSpeed = index < max ? typeSpeed : pauseSpeed;
    const currentSentence = getFirst(words).slice(0, index);
    this.setState({currentSentence});

    this.addTimeout = setTimeout(() => {
      // After the timeout is done we check if we can add a new char to our
      // word or if we need to start removming chars
      return (index < max)
        ? this.addChar(index + 1, max, words)
        : this.removeChar(index, 0, words);
    }, addSpeed);
  }

  /**
   * Alters currentSentence string to remove one more char
   *
   * @param  {Number} index   The current index of the word we slicing
   * @param  {Number} min     The min length of the word.
   * @param  {string} word    The entire word.
   */
  removeChar(index, min, words) {
    const { rewindSpeed } = this.props;
    const currentSentence = getFirst(words).slice(0, index);
    this.setState({currentSentence});

    this.removeTimeout = setTimeout(() => {
      // After the timeout is done we check if we can add a new char to our
      // word or if we need to start removming chars
      return (index > min)
        ? this.removeChar(index - 1, min, words)
        : this.changeWord(getFirst(words), words);
    }, rewindSpeed);
  }

  /**
   * Selects the new word to render out or exits the recurtion
   *
   * @param  {String} lastWord  Prev word that was called/typed out
   * @param  {Array}  words     Array of all the words
   */
  changeWord(lastWord = null, words) {
    const { random, infinitive, done } = this.props;
    const newOrderWords = this.setNewOrder(
      this.popLastWord(words, lastWord, infinitive),
      random
    );
    return newOrderWords.length // eslint-disable-line
      ? this.addChar(0, getFirst(newOrderWords).length, newOrderWords)
      : typeof done === 'function' ? done() : null;
  }

  render() {
    const { currentSentence = null } = this.state;
    const { className, caret, Node } = this.props;
    const caretNode = caret
      ? <span className="react-typeout-caret">|</span>
      : null;

    return (
      <Node className={className}>
        <span className="react-typeout-text">{currentSentence}</span>
        {caretNode}
      </Node>
    );
  }
}

TypeOut.defaultProps = {
  words: [],
  infinitive: true,
  random: false,
  currentSentence: null,
  pauseSpeed: 1000,
  rewindSpeed: 50,
  typeSpeed: 200,
  done: null,
  className: 'react-typeout',
  Node: 'div',
  caret: false,
};

TypeOut.propTypes = {
  infinitive: PropTypes.bool,
  random: PropTypes.bool,
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  pauseSpeed: PropTypes.number,
  rewindSpeed: PropTypes.number,
  typeSpeed: PropTypes.number,
  done: PropTypes.func,
  className: PropTypes.string,
  Node: PropTypes.string,
  caret: PropTypes.bool,
};

export default TypeOut;
