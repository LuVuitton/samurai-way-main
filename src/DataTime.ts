export const dataTime = () => {
    const dt = new Date()
    const currentTime = dt.getHours()+':'+dt.getMinutes()
    const currentDate = dt.getDate()+'/'+(dt.getMonth()+1)+'/'+dt.getFullYear()
    return {
        dataTime: {
            currentTime,
            currentDate
        }
    }

}
