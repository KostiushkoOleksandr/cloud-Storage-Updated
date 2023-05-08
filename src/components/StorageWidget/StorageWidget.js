import bytes from "bytes";
import React from "react"

const StorageWidget = (props) => (
    <div className="storage__wrapper">
                            
        <h3 className="storage__title">Використано місця</h3>
                            
        <div className="storage__progress__wrapper">
                            
            <div style={{width: props.getProgressWidth(props),
                        height: "inherit",
                        background: "#3f85f0"}}>
                                
            </div>

        </div>
        
        <h3 className="storage__subtitle">{bytes(props.storage.total - props.storage.available)} з {bytes(props.storage.total)}</h3>
    </div>
)


export default StorageWidget