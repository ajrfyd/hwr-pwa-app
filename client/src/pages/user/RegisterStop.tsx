import { getStorage } from '@/lib/utils/localStorageHandler';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@/components/MenuItem';
import Button from '@/components/Button';
import getUserFBToken from '@/lib/utils/getUserFBToken';
import useMutateCreateUser from '@/lib/query/useMutateCreateUser';
import client from '@/lib/query';
import notify from '@/lib/utils/notify';
import querykeys from '@/lib/query/queryKeys';

const RegisterStop = () => {
  const navigate = useNavigate();
  const { mutate } = useMutateCreateUser({
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [querykeys.REQ_STOP_ALL] });
      notify('탑승 장소 등록에 성공 하였습니다.');
      navigate('/user');
    },
    onError: (e) => {
      notify(
        e.data
          ? e.data.message
          : '등록에 실패하였습니다. 잠시 후 다시 시도해 주세요.'
      );
    }
  });

  const registerStop = async () => {
    const token = await getUserFBToken();
    if (!token)
      return notify('토큰 발급에 실패하였습니다. 잠시 후 다시 시도해 주세요.');

    mutate(token);
  };

  useEffect(() => {
    const user = getStorage('user');
    if (user) return navigate(-1);
  }, []);

  return (
    <>
      <MenuItem title="1" />
      <Button title="등록하기" onClick={registerStop} />
    </>
  );
};

export default RegisterStop;
