import React, {Component} from 'react';
import {Button, Card, CardSection} from './common';
import {Input} from './common';

class AuthForm extends Component{
    state = {
        email:'',
        password:''
    };

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        secureTextEntry={false}
                        value={this.state.email}
                        onChangeText={email=>this.setState({email})}
                        label="email"
                        placeholder="email@email.com"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={password=>this.setState({password})}
                        label="password"
                        placeholder="Password"
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

export default AuthForm;
