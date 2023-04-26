export const required = (values:any) => {
    if (values) return undefined

    return 'Filed is required'
}


export const maxLengthCreator = (maxLength:number)=> (values:any)=> {
    if (values.length>maxLength) return `Max length is ${maxLength} symbols`;
    return undefined
}