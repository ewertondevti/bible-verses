import { getRandomVerse, getVerse } from "@/services/app";
import { IVerse } from "@/types/app";
import { CheckOutlined, CopyOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space, Spin, Typography } from "antd";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Verse.scss";

const { Title, Text } = Typography;

export const Verse = () => {
  const [verse, setVerse] = useState<IVerse>();
  const [isLoading, setIsLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const [search] = useSearchParams();

  const updateVerse = (verse: IVerse) => {
    setVerse(verse);
    setIsLoading(false);
  };

  useEffect(() => {
    const abbrev = search.get("abbrev");
    const chapter = search.get("chapter");
    const verse = search.get("verse");

    setIsLoading(true);

    if (abbrev && chapter && verse) getVerse(abbrev, chapter, verse).then(updateVerse);
    else getRandomVerse().then(updateVerse);
  }, [search]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(verse!.text);
      setCopySuccess(true);
    } catch (err) {
      setCopySuccess(false);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Este versículo me fez lembrar de você!",
          text: verse?.text,
          url: `https://bible-verses.vercel.app/?abbrev=${verse?.book.abbrev.pt}&chapter=${verse?.chapter}&verse=${verse?.number}`,
        });
      } catch (error) {
        console.error("Erro ao compartilhar:", error);
      }
    } else {
      alert("O compartilhamento não é suportado neste navegador.");
    }
  };

  if (isLoading) return <Spin spinning />;

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

        <Row gutter={[8, 8]} className="verse__content-buttons">
          <Col xs={24} md={24}>
            <Button icon={copySuccess ? <CheckOutlined /> : <CopyOutlined />} onClick={handleCopy}>
              {copySuccess ? "Copiado" : "Copiar"}
            </Button>
          </Col>

          <Col xs={24} md={24}>
            <Button icon={<ShareAltOutlined />} onClick={handleShare}>
              Compartilhar
            </Button>
          </Col>
        </Row>
      </Space>
    </Row>
  );
};
