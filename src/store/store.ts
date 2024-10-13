import { createStore } from 'redux'

import rootReducers from './root-reducer'

const store = createStore(rootReducers)

export default store
