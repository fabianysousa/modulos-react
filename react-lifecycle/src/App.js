import React, { Component } from 'react';
import Users from './components/users/Users';
import Toggle from './components/toggle/Toggle';

//componentDidMount - executado APÓS o primeiro render() e útil para requisições HTTP, por exemplo.
//componentDidUpdate - executado APÓS toda invocação de render() e útil para aplicações de "efeitos colaterais".
//componentWillUnmont - executado ANTES do primeiro componente "morrer" e útil para finalização de objetos, como por exemplo clearInterval.

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      showUsers: false,
    };
  }
  async componentDidMount() {
    const res = await fetch(
      'https://randomuser.me/api/?seed=rush&nat=br&results=10'
    );
    const json = await res.json();
    this.setState({
      users: json.results,
    });
  }

  handleShowUsers = (isChekced) => {
    this.setState({ showUsers: isChekced });
  };

  render() {
    const { showUsers, users } = this.state;
    return (
      <div>
        <h3>React LifeCycle</h3>
        <Toggle
          description="Mostrar usuários"
          enabled={showUsers}
          onToggle={this.handleShowUsers}
        />
        <hr />
        {showUsers && <Users users={users} />}
      </div>
    );
  }
}
