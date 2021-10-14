export enum ACTION_TYPE{
    REMOVE_TAG = 'removeTag',
    ADD_TAG = 'addTag'
}

export interface IAction{
    type:ACTION_TYPE,
    payload:any
}

export interface IState{
    tagList:string[]
}

const tagReducer = (state:IState,action:IAction):IState => {
    const {type,payload} = action;

    switch(type){
        case ACTION_TYPE.ADD_TAG:
            return{
                ...state,
                tagList:[...state.tagList,payload as string]
            }
        case ACTION_TYPE.REMOVE_TAG:
            return{
                ...state,
                tagList: state.tagList.filter(tag => tag !== payload)
            }
    }
}

export{
    tagReducer
}