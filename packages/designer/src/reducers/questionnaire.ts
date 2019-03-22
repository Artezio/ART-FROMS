import * as Models from '@art-forms/models';
import { Action } from '../interfaces/Action';
import { CREATE_QUESTIONNAIRE, ADD_ITEM, ACTION, SET_DESCRIPTION, SET_TITLE, REMOVE_ITEM, UPDATE_QUESTIONNAIRE, UPDATE_ITEM, ADD_TEXT_ITEM, UPDATE_TEXT_ITEM } from '../constants/actions';


const INITIAL_STATE: Models.IQuestionnaire | null = null;

export const questionnaire = (state: Models.IQuestionnaire | null = INITIAL_STATE, action: Action<ACTION, any>): Models.IQuestionnaire | null => {

    const copyItems = () => {
        const newItems = (state && state.items) ? state.items.slice() : [];
        return newItems;
    }

    switch (action.type) {
        case CREATE_QUESTIONNAIRE: {
            return {
                ...action.payload
            }
        }
        case SET_DESCRIPTION: {
            return {
                ...state as Models.IQuestionnaire,
                description: action.payload
            }
        }
        case SET_TITLE: {
            return {
                ...state as Models.IQuestionnaire,
                title: action.payload
            }
        }
        case ADD_ITEM: {
            const newItems = copyItems();
            newItems.push(action.payload);
            return {
                ...state as Models.IQuestionnaire,
                items: newItems
            }
        }
        case ADD_TEXT_ITEM: {
            const newItems = copyItems();
            newItems.push(action.payload);
            return {
                ...state as Models.IQuestionnaire,
                items: newItems
            }
        }
        case REMOVE_ITEM: {
            const newItems = (state && state.items) ? state.items.filter(item => item !== action.payload) : [];
            return {
                ...state as Models.IQuestionnaire,
                items: newItems
            }
        }
        case UPDATE_QUESTIONNAIRE: {
            return {
                ...state as Models.IQuestionnaire,
                ...action.payload
            }
        }
        case UPDATE_ITEM: {
            let newItems = copyItems();
            newItems = newItems.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            })
            return {
                ...state as Models.IQuestionnaire,
                items: newItems
            }
        }
        case UPDATE_TEXT_ITEM: {
            let newItems = copyItems();
            newItems = newItems.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            })
            return {
                ...state as Models.IQuestionnaire,
                items: newItems
            }
        }
        default: {
            return state
        }
    }
}

export default questionnaire;