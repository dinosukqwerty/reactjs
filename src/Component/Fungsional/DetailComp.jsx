import React from 'react'
import { Jumbotron, Button } from 'reactstrap';

function DetailComp(props) {
        return (
            <div>
                <Jumbotron>
                <h1 className="display-3">{props.location.state.Judul}</h1>
                <p className="lead">{props.location.state.Tanggal}</p>
                <hr className="my-2" />
                <p>{props.location.state.id}</p>
                <p className="lead">
                <Button color="primary">Learn More</Button>
                </p>
                </Jumbotron>
            </div>
        )
    
}

export default DetailComp
