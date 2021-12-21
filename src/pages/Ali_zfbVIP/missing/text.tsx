import { Table, Anchor } from 'antd';

const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
  },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    render: () => <a>action</a>,
  },
];

export const Demo = () => {
  console.log(data);
  return (
    <>
      <Anchor>
        <Anchor.Link href="#1" title="aaah1" />
        <Anchor.Link href="#2" title="h2" />
        <Anchor.Link href="#3" title="h3" />
        <Anchor.Link href="#4" title="h4" />
        <Anchor.Link href="#test" title="??" />
      </Anchor>
      <h1 id="test">aa</h1>
      <Table columns={columns} dataSource={data} />
      <div>
        <h1 id="1">1</h1>
        <h1 id="2">2</h1>
        <h1 id="3">3</h1>
        <h1 id="4">4</h1>
      </div>
    </>
  );
};

type DataType = {
  key: number;
  name: string;
  age: number;
  address: string;
};

const data: DataType[] = [];
for (let i = 0; i < 500; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
