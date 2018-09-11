import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import axios from '../../axios-orders';


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount(){
            axios.interceptors.request.use(request => {
                this.setState({error: null});
            });


            axios.interceptors.response.use(null, error => {
                this.setState({error: error});
                console.log(error)
            });
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render(){
            return (
                <React.Fragment>
                    <Modal
                        show={this.state.error}
                        clicked={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </React.Fragment>
            );
        }
    }
}

export default withErrorHandler;