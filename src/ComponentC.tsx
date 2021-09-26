import { useHistory } from "react-router-dom"

export default function ComponentC() {
    const history = useHistory();
    return (
        <>
            <div>Component C</div>
            <button onClick={() => history.push('/a')}>Go to a</button>
        </>
    )
}