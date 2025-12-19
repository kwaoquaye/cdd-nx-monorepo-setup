// import {} from ""

import { Stack } from '../layouts/Stack';
import { Text } from './typography/Text';

type TimeTrackProps = {
  startTime: string;
  endTime: string;
  children?: React.ReactNode | string;
};
export const TimeTrack = ({ startTime, endTime, children }: TimeTrackProps) => {
  return (
    <Stack direction={'row'} alignItems={'center'} width={'100%'} gap={1}>
      <Text type='textXSmall'>{startTime}</Text>
      {children}
      <Text type='textXSmall'>{endTime}</Text>
    </Stack>
  );
};
