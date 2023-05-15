import React, {ChangeEvent} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {setStatusMessageAC, updateProfileStatusTC} from "../../Redux/Reducers/ProfileReducer";
import s from './EditableText.module.css'

//костыль с забайдненым this нужен что бы в методе this был, до этого он почему то его не находит// уже работает
class EditableText extends React.Component<EditableTextPropsType, EditableTextLocalStateType> {

    state = {
        editMode: false,
        inputCurrenValue: ''
    }


    componentDidUpdate(prevProps: Readonly<EditableTextPropsType>, prevState: Readonly<EditableTextLocalStateType>) {
        if (prevProps.statusMessage !== this.props.statusMessage) {
            this.setState({
                inputCurrenValue: this.props.statusMessage
            })
        }
    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inputCurrenValue: e.currentTarget.value
        })
    }

    onBlurHandler = () => {
        this.props.updateProfileStatusTC(this.state.inputCurrenValue)
        this.setState({
            editMode: false,
        })
    }
    turnOnEditModeHandler = () => {
        this.setState({
                editMode: true
            }
        )
    }


    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div className={s.normalText}  onClick={this.turnOnEditModeHandler}>
                        <span
                           >{this.props.statusMessage || 'status is empty...'}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <input
                        value={this.state.inputCurrenValue}
                        onChange={this.onChangeHandler}
                        autoFocus
                        onBlur={this.onBlurHandler}
                    />}
            </>
        )
    }
}


export default compose<React.ComponentType<EditableTextParentPropsType>>(
    connect(null, {updateProfileStatusTC, setStatusMessageAC})
)(EditableText)


type EditableTextPropsType = MapDispatchType & EditableTextParentPropsType

type MapDispatchType = {
    updateProfileStatusTC: (statusMessage: string) => void
    setStatusMessageAC: (statusMessage: string) => ReturnType<typeof setStatusMessageAC>
}

type EditableTextParentPropsType = {
    // userID: number
    statusMessage: string
}
type EditableTextLocalStateType = {
    editMode: boolean
    inputCurrenValue: string
}

