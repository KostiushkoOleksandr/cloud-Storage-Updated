import StorageWidget from ".././StorageWidget";
import React from "react";

class LeftSection extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div className="section section--left">

                <div className="add-button" onClick={this.props.addButtonEvent} ref={this.props.wrapperRef}>
                        
                    <img className="add-button__img" src="/images/add-blue.png"/>

                    <h3 className="add-button__title">Створити</h3>

                    <div className={this.props.showAddOptions ? "add-button__option-wrapper add-button__option-wrapper--show" : "add-button__option-wrapper"}>
                        <div className="add_button__option__add-folder-wrapper" onClick={this.props.createFolder}>
                            <img className="add_button__option__add-folder-image" src="/images/add-folder.png"/>
                            <p className="add_button__option__add-folder-title">Створити папку</p>
                        </div>

                        <div className="add_button__option__add-folder-wrapper add_button__option__add-folder-wrapper--no-border">
                                    
                            <img className="add_button__option__add-folder-image" src="/images/upload-file.png"/>
                            <p className="add_button__option__add-folder-title">Завантажити файл</p>
                            <input className="add_button__option__add-file-input"  ref={this.props.uploadInput} 
                            type="file" multiple={true} onChange={this.props.handleUpload}/>
                                    
                        </div>

                        <div className="add_button__option__add-folder-wrapper add_button__option__add-folder-wrapper--no-border">
                            <img className="add_button__option__add-folder-image" src="/images/upload-folder.png"/>
                            <p className="add_button__option__add-folder-title">Завантажити папку</p>
                        </div>
                    </div>

                </div>
                        
                {this.props.storage.total !== 0 ? 
                <StorageWidget />
                : undefined}

            </div>


        )
    }
}

export default LeftSection;
