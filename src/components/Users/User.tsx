import sUsList from "./UsersList.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const User = ({
                         photos,
                         followed,
                         name,
                         status,
                         userID,
                         usersAreLoading,
                         onFollowTC,
                         onUnfollowTC
                     }: UserPropsType) => {

    const onFollowHandler = () => {
        onFollowTC(userID)
    }

    const onUnfollowHandler = () => {
        onUnfollowTC(userID)
    }


    return (
        <div className={sUsList.itemWrapper}>
            <Card style={{}}>
                <div className={sUsList.cardWrapper}>
                    <Container>
                        <Row>

                            <Col>
                                <div className={sUsList.bodyWrapper}>
                                    <NavLink to={`/profile/${userID}`}>

                                        <Card.Img
                                            variant="top"
                                            src={photos?.small
                                                ? photos.small
                                                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbd87QavjazVx5tJ9sLdp_p2oqfGoN1KUjw&usqp=CAU'
                                            }
                                        />

                                    </NavLink>
                                    <Card.Body>
                                        <div className={sUsList.cardBodyWrapper}>
                                            <Card.Title><span className={sUsList.userName}>{name}</span></Card.Title>

                                            <Button
                                                variant={followed ? 'light' : 'secondary'}
                                                disabled={usersAreLoading.some(e => e === userID)}
                                                onClick={followed ? onUnfollowHandler : onFollowHandler}

                                            >{followed ? 'unfollow' : 'follow'}</Button>
                                        </div>
                                    </Card.Body>
                                </div>
                            </Col>


                            <Col sm={7} className="text-right ml-auto">
                                <div className={sUsList.statusWrapper}>
                                    <Card
                                        body>{status ? status : "there should have been a status, but here I am. We wait..."}</Card>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Card>
        </div>
    );
};


export type UserPropsType = {
    photos: { small: string | null; large: string | null; }
    followed: boolean
    name: string
    status: string | null
    userID: number
    usersAreLoading: number[]
    onFollowTC: (userID: number) => void
    onUnfollowTC: (userID: number) => void
}


// function BasicExample() {
//     return (
//         <Card style={{ width: '18rem' }}>
//             <NavLink to={`/profile/${userID}`}>
//             <Card.Img variant="top" src={
//                 photos?.small
//                     ? photos.small
//                     : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbd87QavjazVx5tJ9sLdp_p2oqfGoN1KUjw&usqp=CAU'
//             } />
//             </NavLink>
//
//             <Card.Body>
//                 <Card.Title>{name}</Card.Title>
//                 <Card.Text>
//                     {status?status:'status is empty...'}
//                 </Card.Text>
//                 <Button
//                     variant={followed ?'primary':'light'}
//                     disabled={usersAreLoading.some(e => e === userID)}
//                     onClick={followed ? onUnfollowHandler : onFollowHandler}
//
//                 >{followed ? 'unfollow' : 'follow'}</Button>
//             </Card.Body>
//         </Card>
//     );
// }