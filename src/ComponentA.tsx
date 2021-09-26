import { useHistory } from "react-router"


export default function ComponentA() {
    const history = useHistory();
    return (
        <>
            <div>Component A</div>
            <button onClick={() => history.goBack()}>Go back</button>
        </>
    )
}