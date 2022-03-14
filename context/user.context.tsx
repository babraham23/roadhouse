import React, { createContext, FC, useContext, useState } from 'react';


type User = {
    userType?: string
}

type Context = {
    user?: User
    userType?: any
    setUserType?: any
}

const UserContext = createContext<Context>({
    user: undefined,
    userType: undefined,
    setUserType: null
})

export const UserProvider: FC = ({ children }) => {
    const [ userType, setUserType ] = React.useState("")
    // const [ user, setUser ] = useState<User>({
    //     userType: ""
    // })

    return <UserContext.Provider value={{userType, setUserType}} >{children}</UserContext.Provider>
}

export const useUserContext = (): Context => useContext<Context>(UserContext);
