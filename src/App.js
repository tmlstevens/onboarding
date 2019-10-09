import React, { Component } from 'react';
// import { } from 'reactstrap';
import SignUp from '../src/Components/SignUp/SignUp';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render() {
        return (
            <div className='main-container'>
                <SignUp />

            </div>
        )   
  }
}

export default App;
