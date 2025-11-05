import { Area, XAxis, Tooltip, AreaChart, CartesianGrid } from 'recharts';

import { cn } from '@/shared/utils';

import { marginConfig } from './config';

import './styles.scss';

export interface SimpleAreaChartProps<T> {
  data: T[];
  xKey: string;
  dataKey: string;
  className?: string;
}

export const SimpleAreaChart = <T,>({
  data,
  xKey,
  dataKey,
  className,
}: SimpleAreaChartProps<T>) => {
  const wrapperClass = cn('simple-area-chart', className);
  return (
    <div className={wrapperClass} onMouseDown={(e) => e.preventDefault()}>
      <AreaChart responsive data={data} margin={marginConfig} style={{ height: '100%' }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#7e22ce" vertical={true} horizontal={false} />

        <XAxis dataKey={xKey} tick={{ fontSize: 10, fill: '#7e22ce' }} />

        <Tooltip />

        <Area
          type="linear"
          fill="#7e22ce66"
          stroke="#7e22ce"
          dataKey={dataKey}
          dot={{ r: 4, stroke: '#7e22ce', strokeWidth: 6, fill: '#7e22ce' }}
        />
      </AreaChart>
    </div>
  );
};
