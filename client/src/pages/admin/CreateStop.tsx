import Flex from '@/components/Flex';
import styled from 'styled-components';
import LabelWithSelect from '@/components/LabelWithSelect';
import TextInput from '@/components/TextInput';
import NumberInput from '@/components/NumberInput';
import Button from '@/components/Button';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { type CreateStopType } from '@/types/stop';
import TimeInput from '@/components/TimeInput';
import useMutateCreateStop from '@/lib/query/useMutateCreateStop';
import notify from '@/lib/utils/notify';
import stopLengthChecker from '@/lib/utils/stopLengthChecker';

const CreateStop = () => {
  const [stop, setStop] = useState<CreateStopType>({
    name: '',
    alias: '',
    direction: 'go',
    line: 'seongnam',
    arrivalTime: '',
    lat: 0,
    lng: 0,
    order: 0
  });

  const updateStop = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target) return;
      const { value, name } = e.target;
      setStop((prev) => ({ ...prev, [name]: value }));
    },
    [stop]
  );

  const { mutate } = useMutateCreateStop({
    onSuccess: () => {
      setStop((prev) => ({
        ...prev,
        name: '',
        alias: '',
        arrivalTime: '',
        lat: 0,
        lng: 0,
        order: prev.order + 1
      }));
      notify('저장 했습니다.');
    },
    onError: (e) => notify(e.data ? e.data.message : e.message)
  });

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(stop);
      const next = stopLengthChecker(stop);
      console.log(next);
      if (!next) return notify('모든 값을 입력해 주세요.');
      mutate(stop);
    },
    [stop]
  );

  return (
    <Flex cName="nes-container " dir="col">
      <form
        onSubmit={onSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <RadioSection
          dir="row"
          justify="space-around"
          sec
          cName="nes-container is-rounded"
        >
          <LabelWithSelect
            item={{
              title: '방 향',
              list: [
                {
                  name: '등 원',
                  checked: stop.direction === 'go',
                  value: 'go'
                },
                {
                  name: '하 원',
                  checked: stop.direction === 'back',
                  value: 'back'
                }
              ],
              name: 'direction'
            }}
            labelColor="primary"
            onChangeValue={updateStop}
          />

          <LabelWithSelect
            item={{
              title: '지 역',
              list: [
                {
                  name: '성 남',
                  checked: stop.line === 'seongnam',
                  value: 'seongnam'
                },
                {
                  name: '분 당',
                  checked: stop.line === 'bundang',
                  value: 'bundang'
                }
              ],
              name: 'line'
            }}
            labelColor="warn"
            onChangeValue={updateStop}
          />
        </RadioSection>
        {/* <Hr /> */}
        <Flex dir="col" sec gap="1rem">
          <TextInput
            title="정 류 장"
            forr="title"
            placeholder="정류장 이름을 입력해 주세요."
            onChange={updateStop}
            name="name"
            value={stop.name}
          />
          <TextInput
            title="별 칭"
            forr="alias"
            placeholder="별칭을 입력해 주세요.(필수값 아님)"
            onChange={updateStop}
            name="alias"
            value={stop.alias}
          />
          <TimeInput
            title="도착 시간"
            forr="arrivalTime"
            placeholder="도착 시간을 설정해 주세요."
            name="arrivalTime"
            value={stop.arrivalTime}
            onChange={updateStop}
          />
          <TextInput
            title="위 도(latitude)"
            forr="lat"
            placeholder="위도를 입력해 주세요.(ex 37.4435175486468)"
            onChange={updateStop}
            name="lat"
            value={stop.lat}
          />
          <TextInput
            title="경 도(longitude)"
            forr="lng"
            placeholder="경도를 입력해 주세요.(ex 127.179966798375)"
            onChange={updateStop}
            name="lng"
            value={stop.lng}
          />
          <NumberInput
            title="순 서"
            forr="order"
            placeholder="정류장 순서를 입력해 주세요."
            onChange={updateStop}
            name="order"
            value={stop.order}
          />
          <Button
            title="제 출"
            color="primary"
            style={{ marginBottom: '1rem', marginTop: '1rem' }}
            type="submit"
          />
        </Flex>
      </form>
    </Flex>
  );
};

export default CreateStop;

const RadioSection = styled(Flex)`
  @media (max-width: 600px) {
    flex-direction: 'column' !important;
    /* display: none; */
  }
`;
