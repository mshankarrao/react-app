import { useParams } from "react-router-dom"

export default function ComponentB() {
    const { name } = useParams<{ name: string }>();
    return <div>{'Component B ' + name}</div>
}