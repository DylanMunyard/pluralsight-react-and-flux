import React, {ChangeEvent} from 'react';

export interface Props {
    id: string,
    label: string,
    name: string,
    title?: string,
    value: string | number,
    error?: string,
    type: string,
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

const TextInput: React.FC<Props> = (props) => {
    let wrapperClass = "form-group";
    if (props.error) {
        wrapperClass += " has-error";
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor="title">{props.label}</label>
            <input
                id={props.id}
                type={props.type}
                name={props.name}
                title={props.title}
                className="form-control"
                value={props.value}
                onChange={props.onChange}
            />
            { props.error && <div className="alert alert-danger">{props.error}</div> }
        </div>
    );
}

export default TextInput;