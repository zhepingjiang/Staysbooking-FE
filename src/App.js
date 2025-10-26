import { Layout } from "antd";
import React from "react";

const { Header, Content } = Layout;

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header></Header>
        <Content></Content>
      </Layout>
    );
  }
}

export default App;
