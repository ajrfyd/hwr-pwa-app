import MenuItem from '../MenuItem';
import React from 'react';
import NoteBaloon from '../NoteBaloon';
import useGetNotiPermission from '@/hooks/useGetNotiPermission';
import Button from '../Button';
// import notify from '@/lib/utils/notify';
// import allowNotificationHandler from '@/lib/utils/allowNotificationHandler';
// import { useNavigate } from 'react-router-dom';
// import useMutateCreateUser from '@/lib/query/useMutateCreateUser';
// import client from '@/lib/query';
// import querykeys from '@/lib/query/queryKeys';

const UserMenu = () => {
  const { permission, requestPermission } = useGetNotiPermission();
  // const navigate = useNavigate();
  // const [token, setToken] = useState('');

  // const notifyAndTokenHandler = async () => {
  //   const noti = await allowNotificationHandler();

  //   console.log(noti);

  //   if (!noti) return notify(`알림을 허용해 주세요. ${noti} ${permission}`);
  //   // const token = await getUserFBToken();
  //   // if (!token)
  //   //   return notify('토큰 발급에 실패하였습니다. 잠시 후 다시 시도해 주세요.');
  //   // mutate(token);
  //   // setStorage('token', JSON.stringify(token));
  // };

  return (
    <React.Fragment>
      <NoteBaloon
        text={`${
          permission === 'granted'
            ? '알림 권한이 설정 되었습니다.'
            : '알림 권한을 허용 하셔야 알림을 받을 수 있습니다.'
        }`}
      />
      {permission === 'granted' && (
        <>
          <MenuItem
            link="user/register"
            title="탑승 및 하차 장소 등록"
            content="탑승장소 및 하차 장소를 선택해 주세요."
          />
          <MenuItem
            link="user/line"
            title="전체 노선 보기"
            content="노선을 보고 싶다면 눌러 주세요."
          />
        </>
      )}
      {/* <MenuItem
        link="user/stop"
        title="탑승 및 하차 장소 등록"
        content="탑승장소 및 하차 장소를 선택해 주세요."
        closed
        onClick={allowNotificationHandler}
      /> */}
      {/* <MenuItem
        link="user/stop"
        title="탑승 등록 및 변경"
        content="이용인 탑승 정보를 변경하고 싶다면 눌러 주세요."
        closed
        onClick={allowNotificationHandler}
      /> */}
      {permission !== 'granted' && (
        <Button title="알림 권한 설정하기" onClick={requestPermission} />
      )}
      <Button title="Refresh" onClick={requestPermission} />
    </React.Fragment>
  );
};

export default UserMenu;
