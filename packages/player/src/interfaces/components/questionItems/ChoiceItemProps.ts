import QuestionItemProps from "./QuestionItemProps";
import * as Models from '@art-forms/models';


export interface ChoiceItemProps extends QuestionItemProps<any> {
    item: Models.IChoiceItem;
}

export default ChoiceItemProps;