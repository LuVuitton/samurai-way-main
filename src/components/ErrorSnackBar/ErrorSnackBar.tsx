// import React from 'react'
// // import Snackbar from '@mui/material/Snackbar/Snackbar'
// // import MuiAlert, {AlertProps} from '@mui/material/Alert/Alert'
// import {RootStateType} from "../../Redux/Store";
// import {connect} from "react-redux";
// import {AppErrorMessageType, setAppStatus, setErrorMessage, StatusType} from "../../Redux/Reducers/appReducer";
// import {Dispatch} from "redux";
//
//
// const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
//     props, ref) {
//     return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
// })
//
//
// class ErrorSnackbar extends React.Component<ErrorSnackbarPropsType> {
//
//     // const globalEntityStatus = useCustomSelector(selectGlobalEntityStatus)
//     // const errorMessage = useCustomSelector(selectErrorMessage)
//     // const dispatch = useDispatch()
//
//     handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
//         if (reason === 'clickaway') {
//             return
//         }
//
//        this.props.setAppStatus("idle")
//         setTimeout(() => {
//           this.props.setErrorMessage( null)
//         }, 1000)
//     }
//
//
//     render() {
//
//         const {appStatus,errorMessage} = this.props
//
//         return (
//             <Snackbar open={appStatus === 'failed'} autoHideDuration={4000} onClose={this.handleClose}>
//                 <Alert onClose={this.handleClose} severity='error' sx={{width: '100%'}}>
//                     {errorMessage} 😐
//                 </Alert>
//             </Snackbar>
//         )
//     }
// }
//
// const mapStateToProps = (state: RootStateType) => {
//     return {
//         appStatus: state.app.appStatus,
//         errorMessage: state.app.appErrorMessage
//     }
// }
// const mapDispatchToProps = (dispatch: Dispatch)=> {
//     return {
//         setAppStatus:(appStatus: StatusType)=>dispatch(setAppStatus(appStatus)),
//         setErrorMessage: (errorMessage: AppErrorMessageType)=> dispatch(setErrorMessage(errorMessage))
//     }
// }
//
//
// export default connect(mapStateToProps,mapDispatchToProps)(ErrorSnackbar)
//
//
//
//
//
//
//
//
//
//
//
// type ErrorSnackbarPropsType = mapStatePropsType & mapDispatchPropsType
//
// type mapStatePropsType = {
//     appStatus: StatusType
//     errorMessage: AppErrorMessageType
// }
//
// type mapDispatchPropsType = {
//     setAppStatus:(appStatus: StatusType)=>void,
//     setErrorMessage: (errorMessage: AppErrorMessageType)=> void
// }

export default {}