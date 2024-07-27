import { getRandomVerse } from "@/services/app";
import { IVerse } from "@/types/app";
import { Row, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import "./Verse.scss";

const { Title, Text } = Typography;

export const Verse = () => {
  const [verse, setVerse] = useState<IVerse>();

  useEffect(() => {
    getRandomVerse().then((verse) => setVerse(verse));
  }, []);

  return (
    <Row className="verse">
      <Space className="verse__content" direction="vertical">
        <Title level={3}>{verse?.text}</Title>
        <Space size="small">
          <Text strong>{verse?.book.name}</Text>
          <Text strong>
            {verse?.chapter}:{verse?.number}
          </Text>
        </Space>
      </Space>
    </Row>
  );
};
