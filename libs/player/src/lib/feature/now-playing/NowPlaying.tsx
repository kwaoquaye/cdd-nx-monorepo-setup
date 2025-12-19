import { Text } from '@pertunes/ui';
import { Box, Card, CardMedia } from '@mui/material';

export const NowPlaying = () => {
  return (
    <Box
      // rounded
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '290px',
      }}
    >
      <Card sx={{marginRight: 2}}>
        <CardMedia
          sx={{
            width: '56px',
            paddingRight: '16px',
            height: '56px',
            background: '#404040',
            borderRadius: '4px',
          }}
        />
      </Card>
      <Box>
        <Text type="textMedium">Song Title</Text>
        <Text type="textXSmall">Artist, Album</Text>
      </Box>
    </Box>
  );
};
