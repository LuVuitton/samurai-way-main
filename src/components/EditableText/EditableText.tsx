import React, {ChangeEvent} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Store";
import {updateProfileStatusTC} from "../../Redux/Reducers/ProfileReducer";
import {setStatusMessageAC} from "../../Redux/ActionCreators";

//костыль с забайдненым this нужен что бы в методе this был, до этого он почему то его не находит// уже работает
class EditableTextClass extends React.Component<EditableTextPropsType, EditableTextLocalStateType> {

    state = {
        editMode: false,
        inputCurrenValue: ''
    }


    componentDidUpdate(prevProps: Readonly<EditableTextPropsType>, prevState: Readonly<EditableTextLocalStateType>, snapshot?: any) {
        if (prevProps.statusMessage !== this.props.statusMessage){
            this.setState({
                inputCurrenValue:this.props.statusMessage
            })
        }
    }

    onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inputCurrenValue: e.currentTarget.value
        })
    }

    onBlurHandler=()=> {
        this.props.updateProfileStatusTC(this.state.inputCurrenValue)
        this.setState({
            editMode:false,
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
            <div>
                {!this.state.editMode &&
                    <span onDoubleClick={this.turnOnEditModeHandler}>{this.props.statusMessage || 'status is empty...'}</span>}
                {this.state.editMode &&
                    <input
                    value={this.state.inputCurrenValue}
                    onChange={this.onChangeHandler}
                    autoFocus
                    onBlur={this.onBlurHandler}
                />}
            </div>
        )
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        statusMessage: state.profile.statusMessage
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {updateProfileStatusTC, setStatusMessageAC})
)(EditableTextClass)










type EditableTextPropsType = MapStateType & MapDispatchType & EditableTextParentPropsType
type MapStateType = ReturnType<typeof mapStateToProps>
type MapDispatchType ={
    updateProfileStatusTC: (statusMessage:string)=>void
    setStatusMessageAC: (statusMessage: string)=>ReturnType<typeof setStatusMessageAC>
}

type EditableTextParentPropsType = {
    userID: number
}
type EditableTextLocalStateType = {
    editMode: boolean
    inputCurrenValue: string
}

