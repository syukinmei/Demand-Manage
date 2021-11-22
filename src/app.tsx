// 创建layout组件
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export const layout = () => {
    return {
        rightContentRender: () => <Header />,
        footerRender: () => <Footer />,
        onPageChange: () => {
            console.log('页面改变了');
        }
    }
}
