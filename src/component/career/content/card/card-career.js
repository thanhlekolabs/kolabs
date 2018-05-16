import React, { Component } from 'react';
import Card from './service-career'
import axios from 'axios';
import Modal from 'react-awesome-modal';
import DialogQC from './dialog-QC'
import DialogNet from './dialog-Net'
import DialogReact from './dialog-React'
class card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            careers:[],
            dialogs:[],
            visible : false,
            id:{},content:{}
        } 
    }
    componentDidMount(){
        axios.get(window.location.origin+'/career')
        .then(res => this.setState({careers:res.data}))
        axios.get(window.location.origin+'/career/dialog')
        .then(res => this.setState({dialogs:res.data}))
    }
    openModal(id) {
        if(id=== "1")
        {
            this.setState({
                id:"1",
                visible : true,
            });
        }
        if(id=== "2")
        {
            this.setState({
                id:"2",
                visible : true,
            });
        }
        if(id=== "3")
        {
            this.setState({
                id:"3",
                visible : true,
            });
        }
    }
    closeModal() {
        this.setState({
            id:{},
            visible : false
        });
    }
    render() {
        return (
            <div className ="careers grid grid-gap-40">
                    {this.state.careers.map(career => 
                        <Card 
                            key={career.id} 
                            title={career.title} 
                            des={career.des} 
                            img={career.img}
                            click={this.openModal.bind(this,career.id)}
                        />
                    )}
                        <Modal 
                                visible={this.state.visible}
                                effect="fadeInDown"
                                onClickAway={this.closeModal.bind(this)}
                        >
                            {this.state.dialogs.map(dialog => dialog.id === this.state.id && dialog.id === "3" ? <DialogQC
                                    key={this.state.id}
                                    title={dialog.name}
                                    clickModal={this.closeModal.bind(this)}
                                /> : 
                                dialog.id === this.state.id && dialog.id ==="2" ? <DialogNet
                                    key={this.state.id}
                                    title={dialog.name}
                                    clickModal={this.closeModal.bind(this)}
                                /> : 
                                dialog.id === this.state.id ? <DialogReact
                                    key={this.state.id}
                                    title={dialog.name}
                                    clickModal={this.closeModal.bind(this)}
                                /> : ""
                            )}
                        </Modal>
            </div>
        );
    }
}
export default card;

