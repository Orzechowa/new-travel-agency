/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const ADD_TAGS = createActionName('ADD_TAGS');
export const REMOVE_TAGS = createActionName('REMOVE_TAGS');
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const addTags = payload => ({payload, type: ADD_TAGS});
export const removeTags = payload => ({payload, type: REMOVE_TAGS});
export const changeDuration = (type, value) => ({
  payload:{[type]: value},
  type: CHANGE_DURATION});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case ADD_TAGS:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      }
    case REMOVE_TAGS:
      return {
        ...statePart,
        tags: statePart.tags.filter(tag => tag !== action.payload),
      }
    case CHANGE_DURATION:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          ...action.payload,
        },
      };
    default:
      return statePart;
  }
}
