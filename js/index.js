var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this.state = {
      break_length: 5,
      session_length: 25,
      session_state: "Session",
      time_left: "25:00",
      time: "test",
      secs: 0,
      mins: 0 };

    _this.url = "http://soundbible.com/mp3/sos-morse-code_daniel-simion.mp3";
    _this.audio = new Audio(_this.url);
    _this.startTimerSession = _this.startTimerSession.bind(_this);
    _this.startTimerBreak = _this.startTimerBreak.bind(_this);
    _this.pauseTimer = _this.pauseTimer.bind(_this);
    _this.resetTimer = _this.resetTimer.bind(_this);
    _this.add = _this.add.bind(_this);
    _this.breakIncrement = _this.breakIncrement.bind(_this);
    _this.breakDecrement = _this.breakDecrement.bind(_this);
    _this.sessionIncrement = _this.sessionIncrement.bind(_this);
    _this.sessionDecrement = _this.sessionDecrement.bind(_this);return _this;
  }_createClass(App, [{ key: "startTimerSession", value: function startTimerSession()
    {var _this2 = this;
      if (this.state.mins == 0) {
        this.setState({
          mins: this.state.session_length,
          time: setInterval(function () {
            if (_this2.state.time_left == "0:0") {
              clearInterval(_this2.state.time);
              _this2.setState({
                session_state: "Break",
                time_left: _this2.state.break_length.toString() + ":00",
                time: "test",
                secs: 0,
                mins: 0 });

              _this2.audio.play();
              _this2.startTimerBreak();
            }
            _this2.add();
          }, 1000) });

      } else
      {
        this.setState({
          time: setInterval(this.add, 1000) });

      }
    } }, { key: "startTimerBreak", value: function startTimerBreak()
    {var _this3 = this;
      if (this.state.mins == 0) {
        this.setState({
          mins: this.state.break_length,
          time: setInterval(function () {
            if (_this3.state.time_left == "0:0") {
              _this3.audio.play();
              clearInterval(_this3.state.time);
              _this3.setState({
                session_state: "Session",
                time_left: _this3.state.session_length.toString() + ":00",
                time: "test",
                secs: 0,
                mins: 0 });

              _this3.audio.play();
              _this3.startTimerSession();
            }
            _this3.add();
          }, 1000) });

      } else
      {
        this.setState({
          time: setInterval(this.add, 1000) });

      }
    } }, { key: "pauseTimer", value: function pauseTimer()
    {
      clearInterval(this.state.time);
    } }, { key: "resetTimer", value: function resetTimer()
    {
      clearInterval(this.state.time);
      this.setState({
        session_state: "Session",
        time_left: this.state.session_length.toString() + ":00",
        time: "test",
        secs: 0,
        mins: 0 });

    } }, { key: "add", value: function add()
    {
      if (0 > this.state.secs) {
        this.setState({
          secs: 60 + this.state.secs,
          mins: this.state.mins - 1 });

      }
      if (this.state.secs == 0 && (this.state.mins == this.state.session_length || this.state.mins == this.state.break_length)) {
        this.setState({
          mins: this.state.mins - 1,
          secs: 59 });

      } else
      {
        this.setState({
          secs: this.state.secs - 1,
          time_left: this.state.mins.toString() + ":" + this.state.secs.toString() });

      }
    } }, { key: "breakIncrement", value: function breakIncrement()
    {
      this.setState({
        break_length: this.state.break_length + 1 });

    } }, { key: "breakDecrement", value: function breakDecrement()
    {
      if (parseInt(this.state.break_length) != 1) {
        this.setState({
          break_length: this.state.break_length - 1 });

      }
    } }, { key: "sessionIncrement", value: function sessionIncrement()
    {
      this.setState({
        session_length: this.state.session_length + 1 });

      this.setState({
        time_left: (this.state.session_length + 1).toString() + ":00" });

    } }, { key: "sessionDecrement", value: function sessionDecrement()
    {
      if (parseInt(this.state.session_length) != 1) {
        this.setState({
          session_length: this.state.session_length - 1 });

        this.setState({
          time_left: (this.state.session_length - 1).toString() + ":00" });

      }
    } }, { key: "render", value: function render()
    {var _this4 = this;
      return (
        React.createElement("div", { className: "App" },
          React.createElement("div", { "class": "card" },
            React.createElement("div", { id: "break_and_session", "class": "center" },
              React.createElement("div", { id: "break-label" },
                React.createElement("h5", null, "Break length"), " ", React.createElement("br", null),
                React.createElement("a", { onClick: function onClick() {return _this4.breakIncrement();}, "class": "btn waves-effect blue", id: "break-increment" }, "+"),
                React.createElement("span", { id: "break-length" }, this.state.break_length),
                React.createElement("a", { onClick: function onClick() {return _this4.breakDecrement();}, "class": "btn waves-effect blue", id: "break-decrement" }, "-")),

              React.createElement("div", { id: "session-label" },
                React.createElement("h5", null, "Session length"), " ", React.createElement("br", null),
                React.createElement("a", { onClick: function onClick() {return _this4.sessionIncrement();}, "class": "btn waves-effect blue", id: "session-increment" }, "+"),
                React.createElement("span", { id: "session-length" }, this.state.session_length),
                React.createElement("a", { onClick: function onClick() {return _this4.sessionDecrement();}, "class": "btn waves-effect blue", id: "session-decrement" }, "-"))),


            React.createElement("div", { id: "timer-label", "class": "center" },
              React.createElement("span", { id: "session-state" }, this.state.session_state),
              React.createElement("span", { id: "time-left" }, this.state.time_left)),

            React.createElement("div", { id: "icons", "class": "center" },
              React.createElement("button", { onClick: function onClick() {return _this4.startTimerSession();}, id: "start" }, React.createElement("i", { "class": "material-icons" }, "play_arrow")),
              React.createElement("button", { onClick: function onClick() {return _this4.pauseTimer();}, id: "pause" }, React.createElement("i", { "class": "material-icons" }, "pause")),
              React.createElement("button", { onClick: function onClick() {return _this4.resetTimer();}, id: "reset" }, React.createElement("i", { "class": "material-icons" }, "refresh"))))));




    } }]);return App;}(React.Component);


ReactDOM.render(
React.createElement(App, null),
document.getElementById("root"));