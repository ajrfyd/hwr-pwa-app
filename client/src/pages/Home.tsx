import MenuItem from '@/components/MenuItem';
import DottedOutline from '@/components/DottedOutline';

const Home = () => {
  return (
    <DottedOutline>
      <MenuItem
        link="register"
        title="사용자 등록"
        content="승차 위치와 사용자를 등록하려면 눌러 주세요."
      />
      <MenuItem
        link="line"
        title="노선 보기"
        content="탑승 위치를 변경하고 싶다면 눌러 주세요."
      />
      <MenuItem
        link="change"
        title="승하차 변경"
        content="탑승 위치를 변경하고 싶다면 눌러 주세요."
      />
      <MenuItem
        link="map"
        title="지도 보기"
        content="지도를 보려면 눌러 주세요."
      />
    </DottedOutline>
  );
};

export default Home;
