import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import s from './OnePostList.module.css'

export const OnePostList = ({userImg,userName,postTime,postText,postID,deletePostHandler, ...props}:OnePostListPropsType) => {

    const onClosePostHandler = ()=> {
        deletePostHandler(postID)
    }

    return (
        <div className={s.mainWrapper}>
        <ToastContainer className="position-static">
            <Toast style={{width:'100%', minWidth:'200px'}} onClose={onClosePostHandler}>
                <Toast.Header>
                    <img src={userImg} className="rounded me-2" alt=""/>
                    <strong className="me-auto">{userName}</strong>
                    <small className="text-muted">{postTime}</small>
                </Toast.Header>
                <Toast.Body>{postText}</Toast.Body>
            </Toast>
        </ToastContainer>
        </div>
    );
}



type OnePostListPropsType = {
    userImg: string
    userName: string
    postTime: string
    postText: string
    postID:string
    deletePostHandler:(id:string)=>void
}