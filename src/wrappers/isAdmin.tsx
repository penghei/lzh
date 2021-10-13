import { Redirect } from "umi";
import store from "@/store"

export default (props) => {
    let name = store.getState().user.currentUser.username;
    let target = store.getState().user.userList.find(val => val.username === name);
    if (target && target.isAdmin) {
        return props.children;
    } else {
        console.log('noAdmin')
        return <Redirect to="/login"/>
    }
}