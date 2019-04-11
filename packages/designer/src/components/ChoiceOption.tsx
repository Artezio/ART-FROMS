import * as React from 'react';
import ChoiceOptionProps from '../interfaces/components/ChoiceOptionProps';


export const ChoiceOption = (props: ChoiceOptionProps) => {
    const { option, item } = props;
    const onBlur = (e: any) => {
        option.value = e.target.value;
        item.updateOption(option);
    }
    const remove = () => {
        item.removeOption(option);
    }
    return <div className="input-group my-1">
        <div className="input-group-prepend">
            <div className="input-group-text">
                <input type="radio" disabled={true} />
            </div>
        </div>
        <input className="form-control" defaultValue={option.value} onBlur={onBlur} />
        <div className="input-group-append">
            <button className="btn btn-outline-danger" onClick={remove}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    </div>
}

export default ChoiceOption;