export const errorHandeler =(statuscode , message)=>{
    const error = new Error();
    error.statuscode = statuscode;
    error.message = message;

}