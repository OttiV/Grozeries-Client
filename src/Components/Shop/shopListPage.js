import React, { Component } from "react";
import ShopListItem from "./shopListItem";
import { getShops } from "../../actions/shops";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";

class ShopList extends Component {
  componentDidMount() {
    this.props.getShops();
  }

  render() {
    return (
      <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div className="container">
            <div className="row">
              {this.props.shops &&
                this.props.shops.length &&
                this.props.shops.map(shop => {
                  return (
                    <div key={shop.id} className="col-lg-3 col-md-4">
                      <ShopListItem shop={shop} />
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shops: state.shops,
    loading: state.appStatus.loading
  };
};

export default connect(
  mapStateToProps,
  { getShops }
)(ShopList);
