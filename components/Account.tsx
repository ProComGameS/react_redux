

import {useSelector} from "react-redux";
import { RootState } from "../src/redux/store.ts";



export function Account () {

    const sessionId = useSelector((state: RootState) => state.session.sessionId);

    return (
        <>
        <p>Accounts page</p>
            <p>ID: {sessionId}</p>
        </>
    )

}