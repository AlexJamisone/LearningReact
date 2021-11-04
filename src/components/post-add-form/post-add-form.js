import React, { Component } from 'react';

import '../post-add-form/post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueCheng = this.onValueCheng.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueCheng(e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    placeholder="О чём вы сейчас думаете?"
                    className="form-control new-post-lable"
                    onChange={this.onValueCheng}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Добавить</button>
            </form>
        )
    }
}

