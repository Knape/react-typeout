'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TypeOut = function (_Component) {
  _inherits(TypeOut, _Component);

  function TypeOut(props) {
    _classCallCheck(this, TypeOut);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      currentSentence: _this.props.words[0]
    };

    _this.addChar = _this.addChar.bind(_this);
    _this.removeChar = _this.removeChar.bind(_this);
    _this.changeWord = _this.changeWord.bind(_this);
    return _this;
  }

  TypeOut.prototype.componentDidMount = function componentDidMount() {
    if (this.props.words.length < 1) {
      console.warn('react-typeout requires a length minimum of one');
      return;
    }
    this.changeWord(null, this.props.words);
  };

  /**
   * Clear timouts when unmounting so we can escape our recursive loop
   */


  TypeOut.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.addTimeout);
    clearTimeout(this.removeTimeout);
  };

  TypeOut.prototype.setNewOrder = function setNewOrder(words, random) {
    return random ? (0, _utils.shuffle)(words) : (0, _utils.move)(words);
  };

  TypeOut.prototype.popLastWord = function popLastWord(words, lastWord, infinitive) {
    return infinitive ? words : (0, _utils.pop)(words, lastWord);
  };

  /**
   * Alters currentSentence string to include one more char
   *
   * @param  {Number} index   The current index of the word we slicing
   * @param  {Number} max     The max length of the word.
   * @param  {string} word    The entire word.
   */


  TypeOut.prototype.addChar = function addChar(index, max, words) {
    var _this2 = this;

    var _props = this.props,
        typeSpeed = _props.typeSpeed,
        pauseSpeed = _props.pauseSpeed;
    // When we get to the last char in the word we stop read the pauseSpeed
    // instead of the typeSpeed

    var addSpeed = index < max ? typeSpeed : pauseSpeed;
    var currentSentence = (0, _utils.getFirst)(words).slice(0, index);
    this.setState({ currentSentence: currentSentence });

    this.addTimeout = setTimeout(function () {
      // After the timeout is done we check if we can add a new char to our
      // word or if we need to start removming chars
      return index < max ? _this2.addChar(index + 1, max, words) : _this2.removeChar(index, 0, words);
    }, addSpeed);
  };

  /**
   * Alters currentSentence string to remove one more char
   *
   * @param  {Number} index   The current index of the word we slicing
   * @param  {Number} min     The min length of the word.
   * @param  {string} word    The entire word.
   */


  TypeOut.prototype.removeChar = function removeChar(index, min, words) {
    var _this3 = this;

    var rewindSpeed = this.props.rewindSpeed;

    var currentSentence = (0, _utils.getFirst)(words).slice(0, index);
    this.setState({ currentSentence: currentSentence });

    this.removeTimeout = setTimeout(function () {
      // After the timeout is done we check if we can add a new char to our
      // word or if we need to start removming chars
      return index > min ? _this3.removeChar(index - 1, min, words) : _this3.changeWord((0, _utils.getFirst)(words), words);
    }, rewindSpeed);
  };

  /**
   * Selects the new word to render out or exits the recurtion
   *
   * @param  {String} lastWord  Prev word that was called/typed out
   * @param  {Array}  words     Array of all the words
   */


  TypeOut.prototype.changeWord = function changeWord() {
    var lastWord = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var words = arguments[1];
    var _props2 = this.props,
        random = _props2.random,
        infinitive = _props2.infinitive,
        done = _props2.done;

    var newOrderWords = this.setNewOrder(this.popLastWord(words, lastWord, infinitive), random);
    return newOrderWords.length // eslint-disable-line
    ? this.addChar(0, (0, _utils.getFirst)(newOrderWords).length, newOrderWords) : typeof done === 'function' ? done() : null;
  };

  TypeOut.prototype.render = function render() {
    var _state$currentSentenc = this.state.currentSentence,
        currentSentence = _state$currentSentenc === undefined ? null : _state$currentSentenc;
    var _props3 = this.props,
        className = _props3.className,
        caret = _props3.caret,
        Node = _props3.Node;

    var caretNode = caret ? _react2.default.createElement(
      'span',
      { className: 'react-typeout-caret' },
      '|'
    ) : null;

    return _react2.default.createElement(
      Node,
      { className: className },
      _react2.default.createElement(
        'span',
        { className: 'react-typeout-text' },
        currentSentence
      ),
      caretNode
    );
  };

  return TypeOut;
}(_react.Component);

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
  caret: false
};

TypeOut.propTypes = {
  infinitive: _propTypes2.default.bool,
  random: _propTypes2.default.bool,
  words: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  pauseSpeed: _propTypes2.default.number,
  rewindSpeed: _propTypes2.default.number,
  typeSpeed: _propTypes2.default.number,
  done: _propTypes2.default.func,
  className: _propTypes2.default.string,
  Node: _propTypes2.default.string,
  caret: _propTypes2.default.bool
};

exports.default = TypeOut;