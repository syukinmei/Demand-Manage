import { debounce } from '@antv/xflow-core/es/common/utils';
import React, { useEffect } from 'react';
import styles from './tianshu.module.less';

function missing() {
  const dragControllerDiv = function () {
    const resize = document.getElementsByClassName(styles.resize);
    const left = document.getElementsByClassName(styles.left);
    const mid = document.getElementsByClassName(styles.mid);
    const right = document.getElementsByClassName(styles.right);

    // 给拖动块添加事件
    for (let i = 0; i < resize.length; i++) {
      // 鼠标点击 - 记录各种坐标
      resize[i].onmousedown = function (e) {
        resize[i].style.background = '#818181'; // 颜色改变提醒
        const startX = e.clientX; // 记录起始坐标
        const leftLeft = left[0].offsetWidth;
        const rightWidth = right[0].offsetWidth;
        // 鼠标拖动 - 计算活动距离
        document.onmousemove = function (e) {
          const endX = e.clientX; // 实时记录当前位置
          // endX - startX = 拖动距离。自身宽度 +- 拖动距离 = 左侧/右侧区域最终宽度
          let finalWidth;
          if (i === 0) {
            finalWidth = leftLeft + (endX - startX);
          } else if (i === 1) {
            finalWidth = rightWidth - (endX - startX);
          }
          if (finalWidth < 50) {
            finalWidth = 50; // 设置最小宽度
            console.log('最小50px');
          }
          if (i === 0) {
            left[0].style.width = finalWidth + 'px';
          } else {
            right[0].style.width = finalWidth + 'px';
          }
        };

        // 鼠标松开 - 删除事件
        document.onmouseup = function (e) {
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

  useEffect(() => {
    dragControllerDiv();
  }, []);

  return (
    <div className={styles.box}>
      <div className={styles.left}>
        left
        {/* 左侧div内容 */}
      </div>

      <div className={styles.resize} title="收缩侧边栏">
        ⋮
      </div>

      <div className={styles.mid}>
        mid
        {/* 中间div内容 */}
      </div>

      <div className={styles.resize} title="收缩侧边栏">
        ⋮
      </div>

      <div className={styles.right}>right</div>
    </div>
  );
}

export default React.memo(missing);
