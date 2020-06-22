import { helper } from '@ember/component/helper';

export default helper(function title(params) {
  const param = params[0];
  if (param.length > 0) {
    return `${param[0].toUpperCase()}${param.substring(1).toLowerCase()}`;
  }

  return param;
});
