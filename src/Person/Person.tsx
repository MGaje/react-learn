import React, { Component } from 'react';
import './Person.css';

type PersonProps = {
    name: string;
    age: number;
    click?: () => void;
    changed?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class Person extends Component<PersonProps> {
    public render(): React.ReactNode {
        return (
            <div className="Person">
                <p onClick={this.props.click}>I'm { this.props.name } and I am { this.props.age } years old!</p>
                <p>
                    { this.props.children }
                </p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}

export default Person;
