import React, { Component, PropTypes } from 'react';
import { shuffle } from './utils';
class TypeOut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentWord: this.props.words[0],
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
   * Alters currentWord string to include one more char
   *
   * @param  {Number} index   The current index of the word we slicing
   * @param  {Number} max     The max length of the word.
   * @param  {string} word    The entire word.
   */
  addChar(index, max, words) {
    const { nextSpeed, pauseSpeed } = this.props;
    // When we get to the last char in the word we stop read the pauseSpeed
    // instead of the nextSpeed
    const addSpeed = index < max ? nextSpeed : pauseSpeed;
    const currentWord = words[0].slice(0, index);
    this.setState({currentWord});

    setTimeout(() => {
      // After the timeout is done we check if we can add a new char to our
      // word or if we need to start removming chars
      return (index < max)
        ? this.addChar(index + 1, max, words)
        : this.removeChar(index, 0, words);
    }, addSpeed);
  }
  /**
   * Alters currentWord string to remove one more char
   *
   * @param  {Number} index   The current index of the word we slicing
   * @param  {Number} min     The min length of the word.
   * @param  {string} word    The entire word.
   */
  removeChar(index, min, words) {
    const { rewindSpeed } = this.props;
    const currentWord = words[0].slice(0, index);
    this.setState({currentWord});

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
    console.log(shuffledWords);
    this.addChar(0, shuffledWords[0].length, shuffledWords);
  }

  render() {
    const { currentWord } = this.state;
    return (
      <span> &#8203; {currentWord} &#8203;</span>
    );
  }
}

TypeOut.defaultProps = {
  infinitive: true,
  random: true,
  currentWord: null,
  pauseSpeed: 1000,
  rewindSpeed: 50,
  nextSpeed: 200,
  done: null,
};

TypeOut.propTypes = {
  // infinitive: PropTypes.bool,
  random: PropTypes.bool,
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  pauseSpeed: PropTypes.number,
  rewindSpeed: PropTypes.number,
  nextSpeed: PropTypes.number,
  // done: PropTypes.func,
};

export default TypeOut;
