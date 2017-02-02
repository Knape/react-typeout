import React, { Component, PropTypes } from 'react';
import { shuffle } from './utils';
class TypeOut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentSentence: this.props.words[0],
      index: -1,
    };

    this.addChar = this.addChar.bind(this);
    this.removeChar = this.removeChar.bind(this);
    this.changeWord = this.changeWord.bind(this);
  }

  componentDidMount() {
    this.changeWord(null, this.props.words);
  }

  shuffleWords(words, random) {
    const { index } = this.state;
    return random ? shuffle(words) : index + 1;
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
    const currentSentence = words[0].slice(0, index);
    this.setState({currentSentence});

    setTimeout(() => {
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
    const currentSentence = words[0].slice(0, index);
    this.setState({currentSentence});

    setTimeout(() => {
      // After the timeout is done we check if we can add a new char to our
      // word or if we need to start removming chars
      return (index > min)
        ? this.removeChar(index - 1, min, words)
        : this.changeWord(words[0], words);
    }, rewindSpeed);
  }

  changeWord(lastWord = null, words) {
    const { random } = this.props;
    const shuffledWords = this.shuffleWords(words, random, lastWord);
    this.addChar(0, shuffledWords[0].length, shuffledWords);
  }

  render() {
    const { currentSentence } = this.state;
    const { className, caret, Node } = this.props;
    const caretNode = caret ? <span className="react-typeout-caret"></span> : null;
    return (
      <Node className={className}>{currentSentence}{caretNode}</Node>
    );
  }
}

TypeOut.defaultProps = {
  infinitive: true,
  random: true,
  currentSentence: null,
  pauseSpeed: 1000,
  rewindSpeed: 50,
  typeSpeed: 200,
  done: null,
  className: 'react-typeout',
  Node: 'span',
  caret: false,
};

TypeOut.propTypes = {
  random: PropTypes.bool,
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  pauseSpeed: PropTypes.number,
  rewindSpeed: PropTypes.number,
  typeSpeed: PropTypes.number,
  className: PropTypes.string,
  Node: PropTypes.string,
  caret: PropTypes.bool,
};

export default TypeOut;
