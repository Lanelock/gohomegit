import React, { PureComponent } from 'react'
import Barramenu from '../components/Barramenu';

class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
              <Barramenu/>
            </div>
        )
    }
}

export default Home;