import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { products as a } from '../_dummydata_/placedd';

type Context = {
    products?: any;
    setProducts?: any;
};

const PlacesContext = createContext<Context>({
    products: undefined,
    setProducts: undefined,
});

export const PlacesProvider: FC = ({ children }) => {
    const [products, setProducts]: any = useState(a);

    return (
        <PlacesContext.Provider
            value={{
                products,
                setProducts,
            }}
        >
            {children}
        </PlacesContext.Provider>
    );
};

export const usePlacesContext = (): Context => useContext<Context>(PlacesContext);
