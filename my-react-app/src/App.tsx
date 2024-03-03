import { Col, Card, Row } from "antd";
import Meta from "antd/es/card/Meta";
import axios from "axios"
import { useEffect, useState } from "react"

interface ICategoryItem {
  id: number,
  name: string,
  image: string,
  description: string
}

const App: React.FC = () => {

  const [list, setList] = useState<ICategoryItem[]>([]);


  useEffect(() => {
    axios.get<ICategoryItem[]>("http://localhost:5255/api/Categories")
      .then(resp => {
        const { data } = resp;
        console.log("Good request", data);
        setList(data);
      })
      .catch(error => {
        console.log("Error server ", error);
      });



  }, []);

  const content = list.map(x => (
    <Col key={x.id} span={6}>
      <Card
        hoverable
        // style={{ width: 240 }}
        cover={<img alt="example" src={`http://localhost:5255/images/${x.image}`} />}
      >
        <Meta title={x.name} description={x.description} />
      </Card>
    </Col>
  ));

  return (
    <>
      <h1>qqq</h1>
      <Row gutter={16}>
        {content}
      </Row>
    </>
  )
}

export default App
