// Shelf saga holds the function that will call on the database
import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* getShelf(action){

try{
    const response = yield axios.get ('/api/shelf')
    console.log('okay with shelf get request:', action);
    yield put ({type: 'SET_SHELF', payload: response.data});
} catch (error){
    console.log('error with shelf get request:', error);
};
}


function* shelfSaga() {
    yield takeLatest('FETCH_SHELF', getShelf)
}
  
export default shelfSaga;