import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({     // сетстейт работает асинхронно(!)
            editMode: true
        })
        // this.state.editMode = true
        // this.forceUpdate()
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true}
                               onBlur={this.deactivateEditMode}
                               value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus