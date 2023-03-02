import { ResponsiveTreeMap } from '@nivo/treemap';
import { useGetSalesQuery } from 'state/api';
import { Box } from '@mui/material';

const MyResponsiveTreeMap = ({ isDashboard = false }) => {
  const { data, isLoading } = useGetSalesQuery();
  if (!data || isLoading) return 'Loading...';

  console.log(data.salesByCategory);

  const formattedData = {
    name: 'Total',
    children: Object.entries(data.salesByCategory).map(([category, sales], i) => ({
      name: category,
      value: sales,
      children: [
        {
          name: category,
          loc: sales,
        },
      ],
    })),
  };

  return (
    <Box
      height={isDashboard ? '400px' : '100%'}
      width={undefined}
      minHeight={isDashboard ? '325px' : undefined}
      minWidth={isDashboard ? '325px' : undefined}
      position="relative">
      <ResponsiveTreeMap
        data={formattedData}
        identity="name"
        value="loc"
        labelSkipSize={12}
        labelTextColor="white"
        parentLabelPosition="left"
        parentLabelTextColor="white"
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.1]],
        }}
      />
    </Box>
  );
};

export default MyResponsiveTreeMap;
