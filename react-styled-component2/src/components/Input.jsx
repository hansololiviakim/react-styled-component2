import React, { useState } from 'react'
import styled from 'styled-components'

function Input() {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const nameValue = (event) => {
    setName(event.target.value)
  }

  const priceValue = (event) => {
    const newprice = event.target.value.replace(/\D/g, '');
    if (newprice === '') {
      setPrice('');
    } else {
      setPrice(Number(newprice).toLocaleString());
    }
  }

  const ClickButtonHandler = () => {
    if (name.length === 0 && price.length === 0) {
      return alert('이름과 가격 모두 입력해주세요.')
    } 
    alert(`name : ${name}, price : ${String(price).replaceAll(',', '')}`)
  }

  return (
    <>
      <h1>Input</h1>
      <InputBoxWrap>
        <InputBox>
          <p>이름</p>
          <MainInput value={name} onChange={nameValue}/>
        </InputBox>
        <InputBox>
          <p>가격</p>
          <MainInput value={price} onChange={priceValue} placeholder='0'/>
        </InputBox>
        <button onClick={ClickButtonHandler}>저장</button>
      </InputBoxWrap>
    </>
  )
}

const InputBoxWrap = styled.div`
display: flex;
gap: 20px;
`
const InputBox = styled.div`
display: flex;
align-items: center;
gap: 10px;
` 

const MainInput = styled.input`
  height: 30px;
  border: 1px solid black;
  border-radius: 8px;
`
export default Input