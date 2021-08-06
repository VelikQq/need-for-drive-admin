// formating price: 30000 -> 30 000
export const formatPrice = (_number) => {
  let decimal = 0;
  let separator = " ";
  let decpoint = ".";
  let format_string = "#";

  let r = parseFloat(_number);

  let exp10 = Math.pow(10, decimal); 
  r = Math.round(r * exp10) / exp10; 

  let rr = Number(r).toFixed(decimal).toString().split(".");

  let b = rr[0].replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g, "$1" + separator);

  r = rr[1] ? b + decpoint + rr[1] : b;
  return format_string.replace("#", r);
};
