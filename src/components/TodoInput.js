import React from 'react';

export default class TodoInput extends React.Component {
    render(){
        const {item,handleChange, handleSubmit, editItem} = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book" />
                            </div>
                        </div>
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="add a todo item"
                            onChange={handleChange}
                            value={item}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className={
                            editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3" 
                        }>
                        { editItem ? "edit item" : "add item"}
                    </ button>
                </form>
            </div>
        )
    }
}