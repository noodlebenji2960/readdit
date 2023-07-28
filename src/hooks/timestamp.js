export const timePassed = (timestamp) => {
    const milliseconds = timestamp * 1000
    const dateObject = new Date(milliseconds)
    const today = new Date()

    const yearCreated = dateObject.getFullYear()
    const yearNow = today.getFullYear()
    const yearsPassed = yearNow-yearCreated

    const monthCreated = dateObject.getMonth()
    const monthNow = today.getMonth()
    const monthsPassed = monthNow>monthCreated && monthNow-monthCreated
    
    if(monthsPassed<0 && yearsPassed<=0){
        const weeks = Math.floor((((Date.now() - dateObject) / 1000) / 60) / 60 / 24 / 7)
        if(weeks<1){
            const days = Math.floor((((Date.now() - dateObject) / 1000) / 60) / 60 / 24)
            if(days<1){
                const hours = Math.floor((((Date.now() - dateObject) / 1000) / 60) / 60)
                if (hours < 1) {
                    let minutes = Math.floor(((Date.now() - dateObject) / 1000) / 60)
                    if (minutes < 1) {
                        return `${Math.floor((Date.now() - dateObject) / 1000)} seconds ago`
                    } else {
                        return `${minutes} minutes ago`
                    }
                } else {
                    return `${hours} hours ago`
                }
            }else{
                return `${days} days ago`
            }
        }else{
            return `${weeks} weeks ago`
        }
    }else{
        return dateObject.toLocaleDateString('en-US')
    }
}