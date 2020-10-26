import Ract from 'react';

const Wrapper = ({children}) => {
    return(
        <>
        <div>
            <h1>HEADER</h1>
        </div>
        <div>
            {children}
        </div>
        <div>
            <h1>FOOTER</h1>
        </div>
        </>
    )
}

export default Wrapper