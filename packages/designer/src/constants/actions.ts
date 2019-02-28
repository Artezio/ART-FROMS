export const CREATE_QUESTIONNAIRE = 'CREATE_QUESTIONNAIRE';
export type CREATE_QUESTIONNAIRE = typeof CREATE_QUESTIONNAIRE;

export const SET_TITLE = 'SET_TITLE';
export type SET_TITLE = typeof SET_TITLE;

export const SET_DESCRIPTION = 'SET_DESCRIPTION';
export type SET_DESCRIPTION = typeof SET_DESCRIPTION;

export const ADD_DISPLAY_ITEM = 'ADD_DISPLAY_ITEM';
export type ADD_DISPLAY_ITEM = typeof ADD_DISPLAY_ITEM;

export const REMOVE_ITEM = 'REMOVE_ITEM';
export type REMOVE_ITEM = typeof REMOVE_ITEM;

export const UPDATE_QUESTIONNAIRE = 'UPDATE_QUESTIONNAIRE';
export type UPDATE_QUESTIONNAIRE = typeof UPDATE_QUESTIONNAIRE;

export const UPDATE_DISPLAY_ITEM = 'UPDATE_DISPLAY_ITEM';
export type UPDATE_DISPLAY_ITEM = typeof UPDATE_DISPLAY_ITEM;

export type ACTION = CREATE_QUESTIONNAIRE | SET_TITLE | SET_DESCRIPTION | ADD_DISPLAY_ITEM | REMOVE_ITEM | UPDATE_QUESTIONNAIRE | UPDATE_DISPLAY_ITEM;