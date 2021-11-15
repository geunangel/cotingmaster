import React from 'react';
import {
  Wrapper,
  MainTitle,
  Submit,
  SubmitText,
  Line,
  Contents,
  TextSubmitBox,
} from './Write.styles';
import BoardPicker from '../../../commons/picker';

const WriteUI = (props: any) => {
  return (
    <Wrapper>
      <BoardPicker
        selectedValue={props.boards}
        onValueChange={props.setBoards}
      />
      <TextSubmitBox>
        <MainTitle>{props.boards}</MainTitle>
        <Line></Line>
        <Contents
          placeholder="제목을 입력하세요"
          onChangeText={props.setTitle}
        />
        <Contents
          placeholder="내용을 입력하세요"
          onChangeText={props.setContents}
          multiline={true}
        />
      </TextSubmitBox>
      <Submit onPress={props.onSubmit}>
        <SubmitText>등록하기</SubmitText>
      </Submit>
    </Wrapper>
  );
};

export default WriteUI;