import React from 'react';

type UserOutputProps = {
    text1: string,
    text2: string,
    userName?: string
};

class UserOutput extends React.Component<UserOutputProps> {
    public render(): React.ReactNode {
        return (
            <div>
                <p>{this.props.text1}</p>
                <p>{this.props.text2}</p>
                <p>Username: {this.props.userName}</p>
            </div>
        );
    }
}

export default UserOutput;
