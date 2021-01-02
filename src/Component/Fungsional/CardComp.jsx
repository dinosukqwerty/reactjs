import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import {Link} from 'react-router-dom'

function CardComp(props)  {
        return (
            <div>
            <Card>
                <CardImg top width="100%" src="https://placeimg.com/640/480/arch" alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">{props.id}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{props.Judul}</CardSubtitle>
                <CardText>{props.Tanggal}</CardText>
                <Button>
                <Link to = {
                    {
                        pathname : `/detail/${props.id}`,
                        state: {
                            Judul: props.Judul,
                            Tanggal: props.Tanggal
                        }
                    }
                }>Detail</Link>
                </Button>
                </CardBody>
            </Card>
            </div>
        )
}

export default CardComp
