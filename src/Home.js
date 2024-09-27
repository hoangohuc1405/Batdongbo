import { Link } from "react-router-dom";


export function Home() {
    return (
        <>
        <Link to="/callback">Callback</Link>
        <Link to="/promise">Promise</Link>
        <Link to="/async">Async</Link>
        <h1>Tôi sẽ demo bất đồng bộ</h1>
        </>
    )
}