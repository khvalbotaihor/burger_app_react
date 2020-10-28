import React, {Component} from 'react'
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxilary';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        render() {
            return <Aux>
                <Modal show>
                    Something didn't work!
                </Modal>
                <WrappedComponent {...this.props} />
            </Aux>
        }
    }

}


export default withErrorHandler;