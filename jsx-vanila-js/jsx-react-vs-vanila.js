// JSX

<div className="app">
  <h2>Hello World</h2>
  <p>Welcome to this {this.props.appName}</p>
  <UserList users={activeUsers} />
</div>

// Output JS

React.createElement("div", {className: "app"},
  React.createElement("h2", null, "Hello World"),
  React.createElement("p", null, "Welcome to ", this.props.appName),
  React.createElement(UserList, {users: activeUsers})
)