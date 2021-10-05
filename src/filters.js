const nameFilter = function(value){
    if (!value) {
        return '';
    }
    return value.toUpperCase();
}

const phoneFilter = function(value){
    if (!value) {
        return '';
    }
    return value.replace(/-/g, ' ')
}

export{
    nameFilter,
    phoneFilter
}