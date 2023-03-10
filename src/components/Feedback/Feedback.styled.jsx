const { default: styled } = require("styled-components");

export const Buttons = styled.ul`
  display: flex;
  list-style: none;
  li+li{
    margin-left:10px;
  }

`
export const Stats = styled.ul`
  list-style: none;
  p{
    fons-size: 12px;
  }
  li{
    display: flex;
    align-items: center;
  }
  li+li{
    margin-bottom:10px;
  }
`