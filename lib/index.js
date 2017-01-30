'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TypeOut = function (_Component) {
  _inherits(TypeOut, _Component);

  function TypeOut(props) {
    _classCallCheck(this, TypeOut);

    var _this = _possibleConstructorReturn(this, (TypeOut.__proto__ || Object.getPrototypeOf(TypeOut)).call(this, props));

    _this.state = {
      currentWord: _this.props.words[0],
      index: -1
    };

    _this.addChar = _this.addChar.bind(_this);
    _this.removeChar = _this.removeChar.bind(_this);
    _this.changeWord = _this.changeWord.bind(_this);
    return _this;
  }

  _createClass(TypeOut, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.changeWord(null, this.props.words);
    }
  }, {
    key: 'shuffleWords',
    value: function shuffleWords(words, random) {
      var index = this.state.index;

      return random ? (0, _utils.shuffle)(words) : index + 1;
    }

    /**
     * Alters currentWord string to include one more char
     *
     * @param  {Number} index   The current index of the word we slicing
     * @param  {Number} max     The max length of the word.
     * @param  {string} word    The entire word.
     */

  }, {
    key: 'addChar',
    value: function addChar(index, max, words) {
      var _this2 = this;

      var _props = this.props,
          typeSpeed = _props.typeSpeed,
          pauseSpeed = _props.pauseSpeed;
      // When we get to the last char in the word we stop read the pauseSpeed
      // instead of the typeSpeed

      var addSpeed = index < max ? typeSpeed : pauseSpeed;
      var currentWord = words[0].slice(0, index);
      this.setState({ currentWord: currentWord });

      setTimeout(function () {
        // After the timeout is done we check if we can add a new char to our
        // word or if we need to start removming chars
        return index < max ? _this2.addChar(index + 1, max, words) : _this2.removeChar(index, 0, words);
      }, addSpeed);
    }
    /**
     * Alters currentWord string to remove one more char
     *
     * @param  {Number} index   The current index of the word we slicing
     * @param  {Number} min     The min length of the word.
     * @param  {string} word    The entire word.
     */

  }, {
    key: 'removeChar',
    value: function removeChar(index, min, words) {
      var _this3 = this;

      var rewindSpeed = this.props.rewindSpeed;

      var currentWord = words[0].slice(0, index);
      this.setState({ currentWord: currentWord });

      setTimeout(function () {
        // After the timeout is done we check if we can add a new char to our
        // word or if we need to start removming chars
        return index > min ? _this3.removeChar(index - 1, min, words) : _this3.changeWord(words[0], words);
      }, rewindSpeed);
    }
  }, {
    key: 'changeWord',
    value: function changeWord() {
      var lastWord = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var words = arguments[1];
      var random = this.props.random;

      var shuffledWords = this.shuffleWords(words, random, lastWord);
      this.addChar(0, shuffledWords[0].length, shuffledWords);
    }
  }, {
    key: 'render',
    value: function render() {
      var currentWord = this.state.currentWord;

      return _react2.default.createElement(
        'span',
        null,
        ' \u200B ',
        currentWord,
        ' \u200B'
      );
    }
  }]);

  return TypeOut;
}(_react.Component);

TypeOut.defaultProps = {
  infinitive: true,
  random: true,
  currentWord: null,
  pauseSpeed: 1000,
  rewindSpeed: 50,
  typeSpeed: 200,
  done: null
};

TypeOut.propTypes = {
  // infinitive: PropTypes.bool,
  random: _react.PropTypes.bool,
  words: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
  pauseSpeed: _react.PropTypes.number,
  rewindSpeed: _react.PropTypes.number,
  typeSpeed: _react.PropTypes.number
};

exports.default = TypeOut;