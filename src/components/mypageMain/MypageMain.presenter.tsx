import React from 'react';
import {
  ScrollView,
  Wrapper,
  ProfileDefault,
  LogOutView,
  NickNameView,
  NickName,
  ButtonView,
  MyBoards,
  ProfileUpdate,
  ProfileWrapper,
  LogoutIcon,
  EditIcon,
  CurvedLine,
  MyText,
  MyIcon,
  HeartIcon,
  BoardWrapper,
} from './MypageMain.styles';
import { useNavigation } from '@react-navigation/native';
import MyBoardsContainer from '../mypage/myboards/Myboards.container';
import MyLikeContainer from '../mypage/myLike/Mylike.container';

const MyPageMainUI = (props: any) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Wrapper>
        <ProfileWrapper>
          <ProfileUpdate onPress={() => navigation.navigate('프로필수정')}>
            <ProfileDefault
              source={
                props.data?.fetchUserLoggedIn.picture
                  ? { uri: props.data?.fetchUserLoggedIn.picture }
                  : require('../../../public/images/defaultprofile.png')
              }
            />
            <EditIcon name="edit" size={30} />
          </ProfileUpdate>

          <NickNameView>
            <NickName>{props.data?.fetchUserLoggedIn.name}기</NickName>
            <LogOutView onPress={props.onPressLogout}>
              <LogoutIcon name="logout" size={24} />
            </LogOutView>
          </NickNameView>
        </ProfileWrapper>

        <CurvedLine>
          <ButtonView>
            <MyBoards onPress={props.onPressMyBoards}>
              <MyIcon name="pencil" size={38} />
              <MyText>내가 쓴 글</MyText>
            </MyBoards>
            <MyText>|</MyText>
            <MyBoards onPress={props.onPressMyLike}>
              <HeartIcon name="heart-outline" size={24} />
              <MyText>나의 좋아요</MyText>
            </MyBoards>
          </ButtonView>
        </CurvedLine>

        <BoardWrapper>
          {props.isBoards && <MyBoardsContainer data2={props.data2} />}
          {!props.isBoards && <MyLikeContainer data3={props.data3} />}
        </BoardWrapper>
      </Wrapper>
    </ScrollView>
  );
};

export default MyPageMainUI;
