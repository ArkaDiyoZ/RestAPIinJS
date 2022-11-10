
function validateUserIdInBase(rawId, users){
    const getId = Number.parseInt(rawId);

    for(items in users){
        if(users[items].id === getId){
            return {
                status: "success",
                data: getId,
              };
        } 
    }
  
    return {
        status: "error",
        error: "Id is doesn't exist in base",
    };
}

module.exports = validateUserIdInBase;