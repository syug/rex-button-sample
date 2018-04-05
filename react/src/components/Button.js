// @flow
import React from 'react';
import cx from 'classnames';

type PropsType = {
  icon?: {
    name: string,
    layout?: 'left' | 'right',
  },
  children: any,
}

const Button = (props: PropsType) => {
  const { icon, children } = props;
  const { name: iconName, layout: iconLayout = 'right' } = icon ? icon : {};

  const hasIcon = iconName !== '';
  const buttonClass = cx('btn btn-default', {icon: hasIcon});
  const iconClass = cx('rex-icon', iconName, iconLayout);
  const iconDom = hasIcon ? <span className={iconClass}></span> : null;
  const iconL = iconLayout === 'left' ? iconDom : null;
  const iconR = iconLayout !== 'left' ? iconDom : null;

  return (
    <a type="button" className={buttonClass}>
      {iconL}
      {children}
      {iconR}
    </a>
  )
}

export default Button;
