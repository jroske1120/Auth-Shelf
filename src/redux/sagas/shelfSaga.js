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

function* deleteShelfItem(action){

    try{
        // Post is to add, Delete is to remove
        // Post-adds Get-displays Delete-removes Update-edits

        const response = yield axios.delete ('/api/shelf')
        console.log('okay with shelf delete request:', action);
        yield put ({type: 'SET_SHELF', payload: response.data});
    } catch (error){
        console.log('error with shelf delete request:', error);
    };
}
// // DELETE an order in the router
// router.delete('/:id', (req, res) => {
//     pool.query('DELETE FROM "orders" WHERE id=$1', [req.params.id]).then((result) => {
//         res.sendStatus(200);
//     }).catch((error) => {
//         console.log('Error DELETE /api/order', error);
//         res.sendStatus(500);
//     })
// });

function* addItem(action){
    console.log('action payload', action.payload);
    try {
        // post request that adds animals to database
        const response = yield axios.post('/api/shelf')
        yield put({ type: 'SET_SHELF', payload: response.data })
    } catch (error) {
        console.log('issue with post saga:', error)
    }
}


function* shelfSaga() {
    yield takeLatest('FETCH_SHELF', getShelf);
    yield takeLatest('ADD_ITEM', addItem);
    yield takeLatest('DELETE_ITEM', deleteShelfItem);
}
  
export default shelfSaga;