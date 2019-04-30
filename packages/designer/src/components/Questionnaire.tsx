import * as React from 'react';
import * as Models from '@art-forms/models';
import { QuestionnaireProps } from '../interfaces/components/QuestionnaireProps';
import { Form, Text, TextArea, FormApi } from 'informed';
import { useObservableModel } from '../HOCs/useObservableModel';
import ItemWrapper from './ItemWrapper';
import ItemCollectionMenu from './ItemCollectionMenu';
import { Droppable, Draggable, DragDropContext, DropResult } from 'react-beautiful-dnd';
import ItemList from './ItemList';
import _ from 'lodash';

export class Questionnaire extends React.Component<QuestionnaireProps> {
    formApi!: FormApi<Models.IQuestionnaire>;
    itemFactory: Models.ItemFactory;
    documentListener: EventListener;
    itemListener: EventListener;
    nestingLevel: string = '0';

    constructor(props: QuestionnaireProps) {
        super(props);
        this.itemFactory = new Models.ItemFactory(this.props.questionnaire);
        this.documentListener = (e: Event) => {
            this.clearSelected();
        }
        this.itemListener = (e: Event) => {
            const target = (e.currentTarget as Element);
            if (!target.classList.contains('card-active')) {
                this.clearSelected();
                target && target.classList.add('card-active');
                target && target.classList.add('shadow');
            }
        }
        this.subscribeDocument();
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.documentListener, true);
    }

    clearSelected() {
        const selectedItems = document.querySelectorAll('.card-active');
        selectedItems.forEach(selectedItem => {
            selectedItem && selectedItem.classList.remove('card-active');
            selectedItem && selectedItem.classList.remove('shadow');
        })
    }

    subscribeDocument() {
        document.addEventListener('click', this.documentListener, true);
    }

    highlightActiveItems() {
        document.querySelectorAll('.item').forEach(el => {
            el.removeEventListener('click', this.itemListener);
            el.addEventListener('click', this.itemListener);
        })
    }

    handleSubmit(values: Partial<Models.IQuestionnaire>) {
        const { questionnaire } = this.props;
        questionnaire.updateQuestionnaire({ ...questionnaire, title: values.title, description: values.description });
    }

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.IQuestionnaire>) {
        this.formApi = formApi;
    }

    componentDidUpdate() {
        const { questionnaire } = this.props;
        this.formApi.setValues(questionnaire);
        this.highlightActiveItems()
    }

    findNestedItemList(nesting: string[]) {
        //toDO
    }

    onDragEnd(result: DropResult) {
        const { questionnaire } = this.props;
        if (result.reason !== "DROP" || result.destination === null) return;
        const draggableIndex = result.source.index;
        const droppableIndex = result.destination && result.destination.index;
        const nesting = result.type.split(':');
        if (nesting.length < 2) {
            questionnaire.moveItem((droppableIndex as number), draggableIndex);
        }
        else {
            // const currentItemList: Models.Questionnaire | Models.GroupItem = this.findNestedItemList(nesting);
            // currentItemList.moveItem((droppableIndex as number), draggableIndex);
        }
    }

    renderItemList() {
        const { questionnaire } = this.props;
        return <DragDropContext onDragEnd={this.onDragEnd.bind(this)}>
            <ItemList container={questionnaire} nestingLevel={this.nestingLevel} />
        </DragDropContext>
    }

    renderMenu() {
        const { questionnaire } = this.props;
        return <ItemCollectionMenu item={questionnaire} />
    }

    render() {
        const { questionnaire, className = '' } = this.props;
        return <div className={`questionnaire ${className}`}>
            <div className="card card-sm mb-3">
                <div className="card-header d-flex justify-content-end">
                    {this.renderMenu()}
                </div>
                <div className="card-body">
                    <Form getApi={this.getFormApi.bind(this)} key={questionnaire.id} initialValues={questionnaire} onSubmit={this.handleSubmit.bind(this)} >
                        <div className="form-group">
                            <label htmlFor={`${questionnaire.id}-title`}>Questionnaire Title</label>
                            <Text autoComplete="off" className="form-control" id={`${questionnaire.id}-title`} field="title" placeholder="My Questionnaire" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                        </div>
                        <div>
                            <label htmlFor={`${questionnaire.id}-description`}>Questionnaire Description</label>
                            <TextArea autoComplete="off" className="form-control" id={`${questionnaire.id}-description`} field="description" placeholder="My description" onBlur={this.submitForm.bind(this)} />
                        </div>
                    </Form>
                </div>
            </div>
            {this.renderItemList()}
        </div>
    }
}

export default useObservableModel<QuestionnaireProps>(Questionnaire);