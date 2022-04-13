// 单元格边框样式
export const border = {
  none: {},
  thin: {
    top: { style: 'thin' },
    left: { style: 'thin' },
    bottom: { style: 'thin' },
    right: { style: 'thin' },
  },
};

// 单元格对齐方式
export const alignment = {
  center: { vertical: 'middle', horizontal: 'center' }, // 单元格居中对齐
  left: { vertical: 'middle', horizontal: 'left' }, // 单元格左对齐
  right: { vertical: 'middle', horizontal: 'right' }, // 单元格右对齐
};

// 标题样式
export const titleStyle = {
  fill: {},
  font: {
    name: '宋体',
    color: { argb: 'FF000000' },
    family: 1,
    size: 16,
    bold: true,
  },
};

// 表头样式
export const labelStyle = {
  fill: {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFCCFFFF' },
  },
  font: {
    name: '宋体',
    color: { argb: 'FF000000' },
    family: 1,
    size: 12,
  },
};

// 数据样式
export const valueStyle = {
  fill: {},
  fill2: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFEEF7FF' } },
  font: {
    name: '宋体',
    color: { argb: 'FF000000' },
    family: 1,
    size: 10,
  },
};
