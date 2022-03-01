import { debounce } from '@antv/xflow-core/es/common/utils';
import React, { useEffect } from 'react';
import styles from './tianshu.module.less';

function missing() {
  const dragControllerDiv = function () {
    const resize = document.getElementsByClassName(styles.resize);
    const left = document.getElementsByClassName(styles.left);
    const mid = document.getElementsByClassName(styles.mid);
    const right = document.getElementsByClassName(styles.right);
    // const box = document.getElementsByClassName(styles.box);

    // 给拖住区添加事件
    for (let i = 0; i < resize.length; i++) {
      // 鼠标点击 - 记录开始的坐标信息
      resize[i].onmousedown = function (e) {
        // 颜色改变提醒
        resize[i].style.background = '#818181';
        const startX = e.clientX; // 记录起始位置
        resize[i].left = resize[i].offsetLeft - 20;
        console.log(resize[i].left);
        // 提前记录mid right 宽度
        const midWidth = mid[0].offsetWidth;
        const rightWidth = right[0].offsetWidth;
        // console.log(resize[i].offsetLeft, '宽度需要减20')
        // 鼠标拖动
        document.onmousemove = function (e) {
          const endX = e.clientX; // 外层main有20内边距
          // endX - startX = 拖动距离。resize[i].left + 拖动距离 = 左边区域最后的宽度
          let finalWidth = resize[i].left + (endX - startX);
          // 不知道是什么
          // const maxT = box[0].clientWidth - resize[i].offsetLeft;
          if (finalWidth < 50) finalWidth = 50; // 设置左边区域的最小宽度为50px
          // resize[i].style.left = finalWidth;
          // 计算mid需要变化的宽度
          let midMove = finalWidth - resize[i].left;
          if (i === 0) {
            left[0].style.width = finalWidth + 'px';
            mid[0].style.width = midWidth - midMove + 'px';
          } else if (i === 1) {
            mid[0].style.width = midWidth + midMove + 'px';
            right[0].style.width = rightWidth - (endX - startX) + 'px';
          }
        };
        // 鼠标松开
        document.onmouseup = function (e) {
          // 颜色恢复
          resize[i].style.background = '#d6d6d6';
          document.onmousemove = null;
          document.onmouseup = null;
        };
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
