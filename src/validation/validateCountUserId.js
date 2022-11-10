
function validateCountUserId(rawId, users){
    const getId = Number.parseInt(rawId);

    console.log(getId);
    //console.log(source.find((id) => id.TYPE);
    for(items in users){
        if(users[items].id === getId){
            return {
                status: "error",
                error: "Id is alredy in source, make it new !",
            };
        } 
    }
  
    return {
        status: "success",
        data: getId,
      };
}

module.exports = validateCountUserId;