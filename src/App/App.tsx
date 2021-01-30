import React, { Component } from 'react';
import './App.css';

import Person from '../Person/Person';
import UserInput from '../UserInput/UserInput';
import UserOutput from '../UserOutput/UserOutput';

type AppState = {
  persons: { name: string, age: number }[];
  userName: string;
}

class App extends Component<{}, AppState> {
  public state: React.ComponentState = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    userName: 'GManzzz'
  }

  public switchNameHandler(newName: string): void {
    this.setState(
      {
        persons: [
          { name: newName, age: 28 },
          { name: 'Manu', age: 29 },
          { name: 'Stephanie', age: 27 }
        ]
      }
    );
  }

  public switchUserNameHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      userName: event.target.value
    });
  }

  public nameChangedHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    console.log(event);
    this.setState(
      {
        persons: [
          { name: 'Max', age: 28 },
          { name: event.target.value, age: 29 },
          { name: 'Stephanie', age: 27 }
        ]
      }
    );
  }

  public render(): React.ReactNode {
    return (
      <div className="App">
          <h1>React App</h1>
          <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Max!')}
              changed={this.nameChangedHandler.bind(this)}
              >
                My hobbies: Racing
            </Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            <hr />
            <UserOutput text1="Paragraph 1" text2="Paragraph 2" />
            <UserOutput text1="Paragraph 3" text2="Paragraph 4" userName={this.state.userName} />
            <hr />
            <UserInput userName={this.state.userName} changeUserName={this.switchUserNameHandler.bind(this)} />
          </div>
      </div>
    );
  }
}

export default App;
