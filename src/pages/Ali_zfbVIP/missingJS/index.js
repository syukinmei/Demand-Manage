import React, { useEffect } from 'react';
// import { Anchor, Row, Col } from 'antd';
import './index.less';

// 原理：拖动效果的实现基本都是dom操作来实现的，通过拖动分隔线，计算分隔线与浏览器边框的距离(left)，来实现拖动之后的不同宽度的计算；当拖动分隔线1时，计算元素框left和mid；当拖动分隔线2时，计算元素框mid和right；同时设置元素框最小值以防止元素框拖没了（其实是被遮住了）。使用SetCapture() 和 ReleaseCapture()的函数功能指定窗口里设置鼠标捕获。

function miss2() {
  useEffect(() => {
    dragControllerDiv();
  }, []);

  const dragControllerDiv = function () {
    var resize = document.getElementsByClassName('resize');
    var left = document.getElementsByClassName('left');
    var mid = document.getElementsByClassName('mid');
    var box = document.getElementsByClassName('box');
    for (let i = 0; i < resize.length; i++) {
      // 鼠标按下事件
      resize[i].onmousedown = function (e) {
        //颜色改变提醒
        resize[i].style.background = '#818181';
        var startX = e.clientX; // 拨片距浏览器左侧距离
        console.log(resize[i].left);
        resize[i].left = resize[i].offsetLeft - 20;
        // 鼠标拖动事件
        document.onmousemove = function (e) {
          var endX = e.clientX;
          var moveLen = resize[i].left + (endX - startX); // （endx-startx）=移动的距离。resize[i].left+移动的距离=左边区域最后的宽度
          var maxT = box[i].clientWidth - resize[i].offsetWidth; // 容器宽度 - 左边区域的宽度 = 右边区域的宽度

          if (moveLen < 100) moveLen = 100; // 左边区域的最小宽度为100px
          if (moveLen > maxT - 150) moveLen = maxT - 150; //右边区域最小宽度为150px

          resize[i].style.left = moveLen; // 设置左侧区域的宽度

          for (let j = 0; j < left.length; j++) {
            left[j].style.width = moveLen + 'px';
            // mid[j].style.width = (box[i].clientWidth - moveLen - 10) + 'px';
            mid[j].style.width = box[0].clientWidth - moveLen - 10 + 'px';
          }
        };
        // 鼠标松开事件
        document.onmouseup = function (evt) {
          //颜色恢复
          resize[i].style.background = '#d6d6d6';
          document.onmousemove = null;
          document.onmouseup = null;
          resize[i].releaseCapture && resize[i].releaseCapture(); //当你不在需要继续获得鼠标消息就要应该调用ReleaseCapture()释放掉
        };
        resize[i].setCapture && resize[i].setCapture(); //该函数在属于当前线程的指定窗口里设置鼠标捕获
        return false;
      };
    }
  };
  return (
    <div className="box">
      <div className="left">左侧div内容</div>

      <div className="resize" title="收缩侧边栏">
        ⋮
      </div>

      <div className="mid">右侧div内容</div>
    </div>
  );
}

export default React.memo(miss2);
