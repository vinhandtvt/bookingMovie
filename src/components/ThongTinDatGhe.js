import React, { Component } from "react";
import { connect } from "react-redux";
import { HUY_GHE } from "../constants/constants";
import "./BaiTapBookingTicket.css";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div className="mt-5">
        <button className="gheDuocChon"></button>
        <span className="text-light" style={{ fontSize: "30px" }}>
          Ghế đã đặt
        </span>
        <br />

        <button className="gheDangChon"></button>
        <span style={{ fontSize: "30px" }} className="text-light">
          Ghế đang đặt
        </span>

        <br />
        <button className="ghe" style={{ marginLeft: 0 }}></button>
        <span style={{ fontSize: "30px" }} className="text-light">
          Ghế chưa đặt
        </span>

        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "25px" }}>
                <th>Số Ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.dispatch({
                            type: HUY_GHE,
                            soGhe: gheDangDat.soGhe,
                          });
                        }}
                      >
                        Hủy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="text-warning">
              <tr>
                <td>Tổng tiền</td>
                <td>
                  {this.props.danhSachGheDangDat.reduce(
                    (tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    },
                    0
                  )}
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.bookingTicket.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinDatGhe);
