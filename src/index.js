import configureStore from './store/configureStore';
import { bugAdded, bugRemoved, bugResolved } from './store/bugs'; 

const store = configureStore();
const unsubscribe = store.subscribe(()=> {
  console.log('Store changed!!', store.getState());
})

store.dispatch(bugAdded({ description: "bug 1"}));
store.dispatch(bugAdded({ description: "bug 2"}));
store.dispatch(bugResolved({ id: 2}));
store.dispatch(bugAdded({ description: "bug 3"}));
unsubscribe();


console.log(store.getState());