import React, { useRef } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row, Col } from 'antd';
import MainTable from './MainTable';

const missing: React.FC = () => {
  const mainTableRef = useRef<any>(null);

  const [form] = Form.useForm();
  const onFinish = (value: any) => {
    console.log('点击');
    mainTableRef.current.setPageInfo((pre: any) => {
      console.log('修改');
      console.log({ pre });
      if (pre.page === 1) {
        mainTableRef.current.getList();
        return pre;
      } else {
        return { ...pre, page: 1 };
      }
    });
  };

  return (
    <>
      <Form
        name="customized_form_controls"
        layout="inline"
        onFinish={onFinish}
        form={form}
      >
        <Form.Item name="accountName" label="账号名称">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
            搜索
          </Button>
        </Form.Item>
      </Form>

      <MainTable form={form} ref={mainTableRef} />
    </>
  );
};

export default React.memo(missing);
