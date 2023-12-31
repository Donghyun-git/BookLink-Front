export const initialState = {
  markers: [],
  isLoading: true,
  isMapLoading: true,
  currentLocation: {
    lat: 0,
    lng: 0,
  },
  isMove: false,
  moveLocation: {
    lat: 0,
    lng: 0,
  },
  error: null,
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MAP/MARKERS': {
      return {
        ...state,
        markers: action.payload,
        isLoading: false,
        error: null,
      };
    }
    case 'MAP/MAP': {
      return {
        ...state,
        isMapLoading: true,
      };
    }
    case 'MAP/CURRENT': {
      return {
        ...state,
        currentLocation: {
          lat: action.payload.lat,
          lng: action.payload.lng,
        },
      };
    }
    case 'MAP/MOVE': {
      return {
        ...state,
        isMove: true,
        moveLocation: {
          lat: action.payload.lat,
          lng: action.payload.lng,
        },
      };
    }
    case 'MAP/SHOW_MARKER_INFO': {
      const updatedMarkers = state.markers.map((marker) => ({
        ...marker,
        showMarkerInfo:
          marker.name === action.payload ? !marker.showMarkerInfo : false,
      }));
      return {
        ...state,
        markers: updatedMarkers,
      };
    }

    case 'MAP/SHOW_LIST_INFO': {
      const updatedMarkers = state.markers.map((marker) => ({
        ...marker,
        showListInfo:
          marker.name === action.payload ? !marker.showListInfo : false,
      }));
      return {
        ...state,
        markers: updatedMarkers,
      };
    }

    case 'MAP/ERROR': {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
