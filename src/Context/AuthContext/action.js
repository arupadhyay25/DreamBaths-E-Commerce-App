export function LOGIN_REQUEST(){
    return {type:"LOGIN_REQUEST"}
}
export function LOGIN_SUCCESS(value){
    return {type:"LOGIN_SUCCESS",payload:value}
}
export function LOGIN_FAILURE(){
    return {type:"LOGIN_FAILURE"}
}