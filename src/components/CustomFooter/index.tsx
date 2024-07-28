import logo from "@/assets/logo-removebg.png";
import { Space, Typography } from "antd";
import "./CustomFooter.scss";

const { Title, Text } = Typography;

export const CustomFooter = () => {
  return (
    <Space direction="vertical" align="center" size={2} className="footer">
      <img src={logo} width={50} />
      <Title level={5}>Igreja Kairós Portugal</Title>
      <Text>Rua da Papoila 14, 2135-085 Samora Correia</Text>
    </Space>
  );
};
