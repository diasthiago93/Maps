import { CloseCircleOutline } from "@styled-icons/evaicons-outline";
import LinkWrapper from "components/LinkWrapper";
import * as S from "./styles";

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
    <CloseCircleOutline size={32} />
    </LinkWrapper>
    <S.Heading>My Trips</S.Heading>
    <S.Body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur mattis tellus. Nam molestie eget tellus eu volutpat. Pellentesque molestie turpis dui, ac dapibus lectus malesuada a. Etiam a faucibus diam. Etiam nec mauris eget leo bibendum viverra sagittis ac urna. Suspendisse interdum eros nec eleifend tincidunt. Nam sit amet vulputate neque. Pellentesque rutrum tellus enim, eget pharetra augue congue vel. Sed a orci tincidunt, fringilla tortor at, egestas libero. Nam id ex eu est semper fringilla. Proin suscipit tellus sed mi maximus ultrices. Integer at purus pharetra nibh efficitur gravida ac non neque.
    </S.Body>
  </S.Content>
)

export default AboutTemplate