import _ from 'lodash';
import { UPDATE_USERS_STATUS } from '../../constansActions';

const initialState = {
    entities: {},
    allIds: []
};

export default function (state = initialState, action) {
    switch (action.type) {
    case UPDATE_USERS_STATUS:
        return { ...state,
            entities: action.payload.reduce((result, item) => {
                state.entities[item.user_id] = {
                    online: item.status_user.online,
                    lastedAt: item.status_user.lasted_at
                };
                return state.entities;
            }, state.entities),
            allIds: _.union(state.allIds, _.map(action.payload, 'user_id'))
        };
    default:
        return state;
    }
}
