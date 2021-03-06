import {
  SET_SCREAMS,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  LOADING_DATA,
  DELETE_SCREAM,
  POST_SCREAM,
  SET_SCREAM,
  SUBMIT_COMMENT,
} from "../types";

const initialState = {
  screams: [],
  scream: {},
  loading: false,
};

export default function (state = initialState, action) {
  let index = null;
  let tempComments = null;
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_SCREAMS:
      return {
        ...state,
        screams: action.payload,
        loading: false,
      };
    case LIKE_SCREAM:
    case UNLIKE_SCREAM:
      index = state.screams.findIndex(
        (scream) => scream.screamId === action.payload.screamId
      );
      state.screams[index] = action.payload;
      if (state.scream.screamId === action.payload.screamId) {
        tempComments = state.scream.comments;
        state.scream = action.payload;
      }
      if (tempComments) {
        return {
          ...state,
          scream: {
            ...state.scream,
            comments: [...tempComments],
          },
        };
      } else {
        return {
          ...state,
        };
      }
    case DELETE_SCREAM:
      index = state.screams.findIndex(
        (scream) => scream.screamId === action.payload
      );
      state.screams.splice(index, 1);
      return {
        ...state,
      };
    case POST_SCREAM:
      return {
        ...state,
        screams: [action.payload, ...state.screams],
      };
    case SET_SCREAM:
      return {
        ...state,
        scream: action.payload,
      };
    case SUBMIT_COMMENT:
      index = state.screams.findIndex(
        (scream) => scream.screamId === action.payload.screamId
      );

      return {
        ...state,
        screams: state.screams.map((scream, currentIndex) => {
          if (index === currentIndex) {
            return {
              ...scream,
              commentCount: scream.commentCount+1,
            };
          } else {
            return scream;
          }
        }),
        scream: {
          ...state.scream,
          comments: [action.payload, ...state.scream.comments],
        },
      };
    default:
      return state;
  }
}
