import React, { Component } from "react";
import ThongTinDatGhe from "./ThongTinDatGhe";
import "./BaiTapBookingTicket.css";
import danhSachGheData from "../data/danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class BaiTapBookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <div className="container-fluid"></div>
          <div className="row">
            <div className="col-8 text-center">
              <div className="h3 text-warning">
                đặt vé xem phim cyberlern.vn
              </div>
              <div className="mt-3 text-light" style={{ fontSize: "20px" }}>
                Màn hình
              </div>
              <div
                className="mt-2"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <div className="screen"></div>
              </div>
              {this.renderHangGhe()}
            </div>
            <div className="col-4">
              <div className="text-light mt-2" style={{ fontSize: "35px" }}>
                danh sách ghế bạn chọn
              </div>
              <ThongTinDatGhe />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
