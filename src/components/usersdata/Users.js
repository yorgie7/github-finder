import React, { Component } from "react";
import UserItem from "./UserItem";
import UserDialogue from "./UserDialogue";
import { Button }  from "../../styled";


class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: this.props.users,
      isOpen: false,
      visible: 12,
      hasMore: true,

      isDialogOpen: false,
      dialogUser: "",
    };
    this.loadMore = this.loadMore.bind(this);
    this.toggleDialog = this.toggleDialog.bind(this);
  }

  loadMore() {
    this.setState({ visible: this.state.visible + 12 });
  }

  toggleDialog(dialogUser) {
    if (dialogUser === null) {
      this.setState({ dialogUser: "", isDialogOpen: !this.state.isDialogOpen });
      console.log("bye dialog");
    } else {
      this.setState({
        dialogUser: dialogUser,
        isDialogOpen: !this.state.isDialogOpen,
      });
      console.log("hii dialog");
    }
  }

  render() {
    return (
      
        <>
          {this.props.loading ? (
            <div
              style={{
                textAlign: "center",
                fontWeight: "300",
                margin: "180px",
              }}
            >
              <h2 style={{ textAlign: "center", fontWeight: "300" }}>
                Loading...
              </h2>
              Please check your connection...
            </div>
          ) : (
            <div className="divHideScrollUser">
              <div className="UserCard">
                {this.props.users.slice(0, this.state.visible).map((usr) => (
                  <UserItem
                    key={usr.id}
                    user={usr}
                    toggleDialog={this.toggleDialog}
                  />
                ))}
              </div>

              {this.props.users.length > 0 && (
                <div style={{ textAlign: "center", paddingTop: "20px" }}>
                  <Button onClick={this.loadMore}>See More</Button>
                </div>
              )}

              {this.state.isDialogOpen && (
                <>
                  <UserDialogue
                    user={this.state.dialogUser}
                    toggleDialog={this.toggleDialog}
                  />
                </>
              )}
            </div>
          )}
        </>
      
    );
  }
}

export default User;
