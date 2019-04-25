import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../../Actions/simpleAction';

export class Home extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        console.log(this.props)
        const { message } = this.props.simpleReducer;
        console.log(message)
        const { simpleAction } = this.props.actions;
        return (
            <div>
                <button onClick={() => simpleAction('foobarActionMessage')}>Action!</button>
                {message}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        simpleReducer: state.simpleReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
