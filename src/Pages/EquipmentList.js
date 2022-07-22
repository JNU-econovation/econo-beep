import React from 'react';
import styled from 'styled-components';
import EquipmentInfo from '../Components/EquipmentInfo';

function BooksList() {
  const equipmentResultList = [
    { to: '/555', src: 'https://www.lge.co.kr/kr/images/monitors/md08920891/gallery/medium01.jpg', equipmentId: 'e-555', equipmentName: '모니터', equipmentRent: '대여 가능' },
    { to: '/555', src: 'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-multiple-products/monitor/dell-gen-snp-all-monitors-accessories-p3421w-800x620-right-facing.png?fmt=png-alpha&wid=800&hei=620', equipmentId: 'e-555', equipmentName: '모니터', equipmentRent: '대여 가능' },
    { to: '/555', src: 'https://blog.kakaocdn.net/dn/bffERm/btrCdIiYwHi/YKDnATjkwCKvYRv18POBc1/img.jpg', equipmentId: 'e-555', equipmentName: '모니터', equipmentRent: '대여 가능' },
    { to: '/555', src: 'https://www.lge.co.kr/kr/images/monitors/md08920891/gallery/medium01.jpg', equipmentId: 'e-555', equipmentName: '모니터', equipmentRent: '대여 가능' },
  ];

  return (
    <Body>
      <ListBox>
        {equipmentResultList.map((item) => (
          <EquipmentInfo
            key={item.id}
            to={item.to}
            src={item.src}
            equipmentId={item.equipmentId}
            equipmentName={item.equipmentName}
            equipmentRent={item.equipmentRent}
          />
        ))}
      </ListBox>
    </Body>
  );
}
const Body = styled.div``;

const ListBox = styled.div`
  background-color: ${(props) => props.theme.bgColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default BooksList;
