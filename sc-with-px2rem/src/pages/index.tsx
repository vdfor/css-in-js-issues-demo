import React from 'react';
// @ts-ignore
import Button from '@kiwicom/orbit-components/es/Button'
import styled from 'styled-components';
import styles from './index.less';

// px2rem exclude 配置未生效
const TextView = styled.h1`
  width: 60px;
`;

export default () => {
  return (
    <div>
      <TextView>Hello, World</TextView>
      <h1 className={styles.title}>Page index</h1>
      {/* node_modules px 单位未转换 */}
      <Button>测试</Button>
    </div>
  );
};
