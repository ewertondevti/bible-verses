import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { CustomFooter } from "../CustomFooter";
import "./AppLayout.scss";

const { Content } = Layout;

export const AppLayout = () => {
  const generateRandomNumber = () => Math.floor(Math.random() * 11) + 1;

  return (
    <Layout className="layout">
      <Content className={`bg${generateRandomNumber()}`}>
        <Outlet />

        <CustomFooter />
      </Content>
    </Layout>
  );
};
