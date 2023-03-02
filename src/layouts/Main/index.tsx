import React, {memo} from "react";

const Main = memo((props: any) => {
    const { children } = props;

    return <div style={{ padding: 15, height: '100%' }}>
        {children}</div>
})
export default Main;