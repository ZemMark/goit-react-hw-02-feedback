const { default: styled } = require("styled-components");

export const Buttons = styled.div`

  button{
    margin-right: 5px;
  }
`
export const Stats = styled.ul`
  list-style: none;
  p{
    fons-size: 12px;
    font-weight: 500;
    text-transform: capitalize;
  }
  li{
    display: flex;
    align-items: center;
  }
  li+li{
    margin-bottom:10px;
  }
`