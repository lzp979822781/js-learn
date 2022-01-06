import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../store/actions/user.action';
// console.log('window', window);

function List(props) {
    const {dispatch, data} = props;

    useEffect(() => {
        dispatch(fetchUser());
    }, []);
    return (
        <div>
            List working
            <ul>
                {Array.isArray(data) && data.map(item => {
                    return <li key={item.id}>{item.name}</li>
                })}
            </ul>
        </div>
    );
}

function loadData(store) {
    return store.dispatch(fetchUser())
}

const mapStateToProps = state => state.user;

export default {
    component: connect(mapStateToProps)(List),
    loadData: loadData
};
