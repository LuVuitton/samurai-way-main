import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import Post from "./Post/Post";
import {OnePostType, PostsType} from "../../InitialState";
import {v1} from "uuid";


type PropsType = {
    posts: PostsType
    addPost:(dataPost: OnePostType)=>void
}

const MyPosts = (props: PropsType) => {

   const [inputValue, setInputValue] = useState('')

   const onChangeHandler =(e:ChangeEvent<HTMLInputElement>)=> {
       setInputValue( e.currentTarget.value)
    }
    const PressEnterToAddPost =(e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter') {
            props.addPost({id:v1(), time:'right now', text:inputValue}) //добавил рандомные значения в id и time
            setInputValue('')
        }
    }

    const mapPost = props.posts.map((e)=>{
      return  <Post key={e.id} text={e.text} time={e.time}/>
    })

    return (
        <>
            <input value={inputValue} type={'text'} onChange={onChangeHandler} onKeyPress={PressEnterToAddPost}/>
            {mapPost}
        </>
    );
}

export default MyPosts;
