import { Jumbotron, Button } from 'reactstrap';
import {useContext} from 'react'
import { CartContext } from '../../CartContext'

function HomePage() {

    return (
        <div>
            <Jumbotron>
            <h1 className="display-3">HomePage  </h1>
            <p className="lead">Hallo</p>
            <hr className="my-2" />
            <p>INI Halaman Home pake Router</p>
            <p className="lead">
            <Button color="primary">Learn More</Button>
            </p>
            </Jumbotron>
        </div>
    )
}

export default HomePage