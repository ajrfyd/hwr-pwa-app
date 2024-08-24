import React from 'react';
import MenuItem from '../MenuItem';
import notify from '@/lib/utils/notify';
import getUserFBToken from '@/lib/utils/getUserFBToken';

const AdminMenu = () => {
  const tokenGetter = async () => {
    const token = await getUserFBToken();
    // console.log(token);
    notify(token as string);
  };

  return (
    <React.Fragment>
      <MenuItem
        link="admin/createStop"
        title="노선 등록"
        content="승차 위치와 사용자를 등록하려면 눌러 주세요."
      />
      <MenuItem
        link="admin/updateStop"
        title="노선 수정"
        content="승차 정보 및 위치를 변경하려면 눌러 주세요."
        closed
        onClick={() => notify('준비중입니다.')}
      />
      <MenuItem
        link="admin/line"
        title="전체 노선 보기"
        content="노선을 보고 싶다면 눌러 주세요."
        closed
        onClick={() => notify('준비중입니다.')}
      />
      {/* <MenuItem
        link="admin/updateUserStop"
        title="탑승 정보 변경"
        content="이용인 탑승 정보를 변경하고 싶다면 눌러 주세요."
        closed
        onClick={() => notify('준비중입니다.')}
      /> */}
      <MenuItem
        link="map"
        title="지도 보기"
        content="지도를 보려면 눌러 주세요."
        closed
        onClick={() => notify('준비중입니다.')}
      />
      <MenuItem
        link="bus"
        title="버스 출발"
        content="버스를 출발 시킵니다."
        closed
        onClick={() => (tokenGetter(), notify('준비중입니다.'))}
      />
    </React.Fragment>
  );
};

export default AdminMenu;
