import { Redirect } from "umi";
import store from "@/store"

export default (props) => {
    if (store.getState().user.currentUser.username === "") {
        console.log('noLogin')
        return <Redirect to="/login"></Redirect>;
    } else {
        return props.children;
    }
}