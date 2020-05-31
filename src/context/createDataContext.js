//automating context creation
import React, { useReducer } from 'react'

export default (reducer, actions, initiaState) => {
    const Context = React.createContext()

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initiaState)

        //actions === {addBlogpost: (dispatch) = {return () => {} } }

        const boundActions = {}
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }
        return <Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>
    }
    return { Context, Provider }
}