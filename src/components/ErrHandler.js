import { useRouteError } from "react-router-dom";
const ErrHandler = () =>{
    const err = useRouteError();
    console.error(err);
    return (
        <div>
            <h1>Opps</h1>
            <h2>Somthing went worng!!!</h2>
            <h3>{err.status + " : " + err.statusText}</h3>
            <h3>{err.data}</h3>
        </div>
    );
}
export default ErrHandler;