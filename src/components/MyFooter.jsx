import { Container, Row } from "react-bootstrap";
import MyFooterColumn from "./MyFooterColumns";

const MyFoter = () => {
  return (
    <Container>
      <footer>
        <Row>
          <MyFooterColumn />
        </Row>
      </footer>
    </Container>
  );
};

export default MyFoter;
