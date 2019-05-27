import React, { Component } from "react";

class Footer extends Component {
  render() {
    let date = new Date();

    return (
      <>
        <hr />
        <div className="row my-3">
          <div className="col text-center">
            <p>
              made with <i className="fas fa-heart text-danger" />{" "}
              {date.getFullYear()} Nils Domin
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
