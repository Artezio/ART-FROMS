import * as Models from '@art-forms/models';

type QuestionnaireEditorPageStatus = {
    loading?: string;
    saving?: string;
    updating?: string;
}

export interface QuestionnaireEditorPageStore {
    mode?: string;
    status: QuestionnaireEditorPageStatus;
    questionnaire?: any;
    questionnaireModel?: Models.Questionnaire;
}