const { BrowserRouter } = require('react-router-dom');

var App = createReactClass({
  render: function () {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="" render={() => 'Hello'} />
            <Route exact path="/greeting" render={<Greeting />} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  },
});
