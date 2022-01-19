import React, { useEffect } from 'react';
// import { Anchor, Row, Col } from 'antd';
import './index.less';
function miss2() {
  useEffect(() => {
    dragControllerDiv();
  }, []);

  const dragControllerDiv = function () {
    var resize = document.getElementsByClassName('resize');
    var resize2 = document.getElementsByClassName('resize2');
    var left = document.getElementsByClassName('left');
    var right = document.getElementsByClassName('right');
    var mid = document.getElementsByClassName('mid');
    var box = document.getElementsByClassName('box');
    for (let i = 0; i < resize.length; i++) {
      resize[i].onmousedown = function (e) {
        var startX = e.clientX;
        resize[i].left = resize[i].offsetLeft;
        document.onmousemove = function (e) {
          var endX = e.clientX;
          var rightW = right[i].offsetWidth;
          var moveLen = resize[i].left + (endX - startX);
          var maxT = box[i].clientWidth - resize[i].offsetWidth;
          if (moveLen < 150) moveLen = 150;
          if (moveLen > maxT - rightW - 150) moveLen = maxT - rightW - 150;

          resize[i].style.left = moveLen;

          for (let j = 0; j < left.length; j++) {
            left[j].style.width = moveLen + 'px';
            mid[j].style.width =
              box[i].clientWidth - moveLen - rightW - 10 + 'px';
          }
        };
        document.onmouseup = function (evt) {
          document.onmousemove = null;
          document.onmouseup = null;
          resize[i].releaseCapture && resize[i].releaseCapture();
        };
        resize[i].setCapture && resize[i].setCapture();
        return false;
      };
    }
    for (let i = 0; i < resize2.length; i++) {
      resize2[i].onmousedown = function (e) {
        var startX = e.clientX;
        resize2[i].left = resize2[i].offsetLeft;
        document.onmousemove = function (e) {
          var endX = e.clientX;
          var leftW = left[i].offsetWidth;
          var moveLen = resize2[i].left + (endX - startX) - leftW;
          var maxT = box[i].clientWidth - resize2[i].offsetWidth - 5;
          if (moveLen < 150) moveLen = 150;
          if (moveLen > maxT - leftW - 150) moveLen = maxT - leftW - 150;

          resize2[i].style.left = moveLen;
          for (let j = 0; j < right.length; j++) {
            mid[j].style.width = moveLen + 'px';
            right[j].style.width =
              box[i].clientWidth - moveLen - leftW - 10 + 'px';
          }
        };
        document.onmouseup = function (evt) {
          document.onmousemove = null;
          document.onmouseup = null;
          resize2[i].releaseCapture && resize2[i].releaseCapture();
        };
        resize2[i].setCapture && resize2[i].setCapture();
        return false;
      };
    }
  };

  return (
    <div className="box">
      <ul className="box">
        <li className="left">西瓜</li>
        <li className="resize"></li>
        <li className="mid">备注2</li>
        <li className="resize2"></li>
        <li className="right">test</li>
      </ul>
      <ul className="box">
        <li className="left">芒果</li>
        <li className="resize"></li>
        <li className="mid">备注</li>
        <li className="resize2"></li>
        <li className="right">test</li>
      </ul>
    </div>
  );
}

export default React.memo(miss2);
