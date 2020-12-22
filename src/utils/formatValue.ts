const formatValue = (value: number): string => {
  const roundValue = value % 1 === 0;
  return `R$ ${Intl.NumberFormat().format(Math.abs(value))}${
    roundValue ? ',00' : ''
  }`;
};

export default formatValue;
