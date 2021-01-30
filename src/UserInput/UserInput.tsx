import React from 'react';

import './UserInput.css';

type UserInputProps = {
    userName: string,
    changeUserName: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

class UserInput extends React.Component<UserInputProps> {
    public render(): React.ReactNode {
        return (
            <div className="UserInput">
                <input type="text" onChange={this.props.changeUserName} value={this.props.userName} />
            </div>
        );
    }
}

export default UserInput;
