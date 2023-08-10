import { getAccessToken } from "@/lib/tokens";

export default function index() {
    getAccessToken().then(a => console.log(a))
    return (
        <div>test3</div>
    )
}
