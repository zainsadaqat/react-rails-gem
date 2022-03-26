const { Provider } = require('react-redux');
const { BrowserRouter } = require('react-router-dom');

var App = createReactClass({
  render: function () {
    return (
      <React.Fragment>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="" render={() => 'Hello'} />
              <Route exact path="/greeting" render={<Greeting />} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </React.Fragment>
    );
  },
});
