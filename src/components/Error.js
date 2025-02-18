import { useRouteError } from "react-router-dom";
const Error = () => {
  let err = useRouteError();
  console.log(err);
  return (
    <div>
      <h2>OOPs!!</h2>
      <h3>somthing went wrong</h3>
      <div>
        <h3>
          {err.status}:{err.statusText}
        </h3>
      </div>
    </div>
  );
};
export default Error;
