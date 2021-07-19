import React from 'react';

function ButtonComponent(props: any) {
    const { onClick, name = 'Incrementer' } = props;
    return (
        <button onClick={onClick} data-test="button-component">{name}</button>
    )
}

export default ButtonComponent;
