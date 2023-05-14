import React, {ReactComponentElement} from "react";
import {ProfileType} from "../../../../Redux/Reducers/ProfileReducer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import s from './ProfileDisplay.module.css';
import Accordion from 'react-bootstrap/Accordion';
import EditableText from "../../../EditableText/EditableText";
import Button from 'react-bootstrap/Button';


export const ProfileDisplay = (props: ProfileDisplayPropsType) => {
    return (<div className={s.mainWrapper}>

        <Container>
            <Row>
                <Col>
                    <div className={s.imgWrapper}>
                        <img src={
                            props.profileData.photos.small
                            || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbd87QavjazVx5tJ9sLdp_p2oqfGoN1KUjw&usqp=CAU'
                        } alt="photo"/>
                    </div>
                </Col>

                <Col xs lg="7">

                    <div className={s.textWrapper}>
                        <div>
                            <strong>Status:</strong>
                            {props.isOwner
                                ? <EditableText statusMessage={props.statusMessage}/>
                                : (props.statusMessage || 'status is empty')}
                            {props.isOwner &&
                                <Button variant="light" onClick={props.toEditModeHandler}>edit profile page</Button>}
                        </div>
                        <div><strong>Full name:</strong> {props.profileData.fullName}</div>

                        <p><strong>Looking for a job:</strong> {props.profileData.lookingForAJob ? 'yes' : 'no'}</p>
                        {props.profileData.lookingForAJob && (
                            <p><strong>Description:</strong> {props.profileData.lookingForAJobDescription}</p>
                        )}
                    </div>
                </Col>

                <Col>
                    <div className={s.contactWrapper}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Contact</Accordion.Header>
                                <Accordion.Body>
                                    <ul> {props.mappedContacts}</ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Col>
            </Row>
        </Container>


    </div>)
}


type ProfileDisplayPropsType = {
    profileData: ProfileType
    mappedContacts: ReactComponentElement<any>[]
    isOwner: boolean
    statusMessage: string
    toEditModeHandler: () => void
}