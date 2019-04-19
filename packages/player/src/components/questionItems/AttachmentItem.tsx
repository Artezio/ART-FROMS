import * as React from 'react';
import useObservableModel from '../../HOCs/useObservableModel';
import QuestionItemProps from '../../interfaces/components/QuestionItemProps';


export class AttachmentItem extends React.Component<QuestionItemProps<void>> {

    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    render() {
        const { item } = this.props;
        return <form key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <div className="input-group">
                    <div className="custom-file">
                        <input autoComplete="off" type="file" name="value" className="custom-file-input" id={item.id} />
                        <label className="custom-file-label" htmlFor={item.id}>Chose file</label>
                    </div>
                </div>
            </div>
        </form>
    }
}

export default useObservableModel<QuestionItemProps<void>>(AttachmentItem);